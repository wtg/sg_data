'use strict'

const Sequelize = require('sequelize')

/**
 * @apiDefine BodyUniqueIdParam
 *
 * @apiParam    {String}    uniqueId            Unique, string identifier for the body
 */

/**
 * @apiDefine BodyResponseObject
 *
 * @apiSuccess  {String}    .uniqueId           Unique, string identifier that serves as the permanent URL for the body
 * @apiSuccess  {String}    .name               The human-readable name of the body
 * @apiSuccess  {String}    .createdAt          The timestamp that the body was created at (ISO format)
 * @apiSuccess  {String}    .updatedAt          The timestamp that the body was last updated at (ISO format)
 * @apiSuccess  {String}    .sessions           The array of sessions associated to the body
 * @apiSuccess  {String}    .sessions.uniqueId      Unique, string identifier identifier for the session
 * @apiSuccess  {String}    .sessions.fullUniqueId  The full unique identifier for the session, including the body's identifier
 * @apiSuccess  {String}    .sessions.bodyUniqueId  Unique, string identifier for the body (same as `uniqueId` at the root)
 * @apiSuccess  {String}    .sessions.name          The human-readable name of the session
 */

/**
 * @api         {get}       /bodies             List bodies
 * @apiVersion  1.0.0
 * @apiName     ListBodies
 * @apiGroup    Bodies
 * @apiDescription          Request information about all bodies of student government
 *
 * @apiUse      QueryOptionalFields
 *
 * @apiSuccess  {Object[]}  bodies              List of student government bodies.
 * @apiUse      BodyResponseObject
 *
 * @apiSuccessExample {json} Example Response:
 *      HTTP/1.1 200 OK
 *      [
 *          {
 *              "uniqueId": "senate",
 *              "name": "Student Senate",
 *              "createdAt": "2017-09-17T15:00:58.828Z",
 *              "updatedAt": "2017-09-17T15:00:58.828Z",
 *              "sessions": [
 *                  {
 *                      "fullUniqueId": "senate/47",
 *                      "uniqueId": "47",
 *                      "name": "47th Student Senate",
 *                      "bodyUniqueId": "senate"
 *                  },
 *                  {
 *                      "fullUniqueId": "senate/48",
 *                      "uniqueId": "48",
 *                      "name": "48th Student Senate",
 *                      "bodyUniqueId": "senate"
 *                  }
 *              ]
 *          }
 *      ]
 */

/**
 * @api         {get}       /bodies/:uniqueId   Get body
 * @apiVersion  1.0.0
 * @apiName     GetBody
 * @apiGroup    Bodies
 * @apiDescription          Request information about a specific body
 *
 * @apiUse      BodyUniqueIdParam
 * @apiUse      QueryOptionalFields
 *
 * @apiSuccess  {Object}    body                Student government body object
 * @apiUse      BodyResponseObject
 * @apiUse      NotFoundError
 */

/**
 * @api         {post}      /bodies             Create body
 * @apiVersion  1.0.0
 * @apiName     CreateBody
 * @apiGroup    Bodies
 * @apiDescription          Creates a new body of student government
 *
 * @apiUse      BodyUniqueIdParam
 * @apiParam    {String}    name                The human-readable name of the body
 */

/**
 * @api         {put}       /bodies/:uniqueId   Update body
 * @apiVersion  1.0.0
 * @apiName     UpdateBody
 * @apiGroup    Bodies
 * @apiDescription          Updates an existing body of student government
 *
 * @apiUse      BodyUniqueIdParam
 * @apiParam    {String}    name                The new name to use for the body of student government
 *
 * @apiUse      NotFoundError
 */

/**
 * @api         {delete}    /bodies/:uniqueId   Delete body
 * @apiVersion  1.0.0
 * @apiName     DeleteBody
 * @apiGroup    Bodies
 * @apiDescription          Deletes an existing body of student government
 *
 * @apiUse      BodyUniqueIdParam
 * @apiUse      NotFoundError
 */

module.exports = (connection, DataTypes) => {
    const Body = connection.define('body', {
        uniqueId: {
            type: DataTypes.STRING,
            primaryKey: true,
            required: true
        },
        name: {
            type: DataTypes.STRING,
            required: true
        }
    })

    Body.associate = models => {
        Body.hasMany(models['session'], { foreignKey: 'bodyUniqueId' })
        Body.hasMany(models['position'], { foreignKey: 'bodyUniqueId', scope: { presidingOfficer: true }, as: 'presidingOfficers' })
    }

    Body.queryIncludes = () => {
        return [{
            model: connection.model('session'),
            attributes: ['fullUniqueId', 'uniqueId', 'name', 'active']
        }, {
            model: connection.model('position'),
            as: 'presidingOfficers'
        }]
    }

    Body.milestones = {
        list: {
            fetch: {
                after: function(req, res, context) {
                    for(let body of context.instance) {
                        body = sessionSort(body)
                    }

                    return context.continue
                }
            }
        },
        read: {
            fetch: {
                after: function(req, res, context) {
                    context.instance = sessionSort(context.instance)
                    return context.continue
                }
            }
        }
    }

    return Body
}

function sessionSort (body) {
    body.dataValues.sessions.sort((a, b) => {
        if (a.dataValues.active && !b.dataValues.active)
            return -1
        else if (!a.dataValues.active && b.dataValues.active)
            return 1
        else if (a.dataValues.uniqueId > b.dataValues.uniqueId)
            return -1
        else if (a.dataValues.uniqueId < b.dataValues.uniqueId)
            return 1
        else
            return 0
    })

    return body
}