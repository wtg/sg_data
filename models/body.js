'use strict'

/**
 * @apiDefine BodyUniqueIdParam
 *
 * @apiParam    {String}    uniqueId            Unique, string identifier that serves as the permanent URL for the body
 */

/**
 * @apiDefine QueryOptionalFields
 *
 * @apiParam    {String}    [q]                 Optional search query to filter results by
 * @apiParam    {Integer}   [offset]            Optional numerical offset to start at for pagination; `page` should not be set simultaneously
  * @apiParam    {Integer}   [page]              Optional page number to start at for pagination; `offset` should not be set simultaneously
 * @apiParam    {Integer}   [count]             Optional number of results to display for pagination
 */

/**
 * @apiDefine BodyResponseObject
 *
 * @apiSuccess  {String}    .uniqueId           Unique, string identifier that serves as the permanent URL for the body
 * @apiSuccess  {String}    .name               The human-readable name of the body
 * @apiSuccess  {String}    .createdAt          The timestamp that the body was created at (ISO format)
 * @apiSuccess  {String}    .updatedAt          The timestamp that the body was last updated at (ISO format)
 */

/**
 * @api         {get}       /bodies             Request information about all bodies of student government
 * @apiVersion  1.0.0
 * @apiName     GetBodies
 * @apiGroup    Bodies
 *
 * @apiUse      QueryOptionalFields
 *
 * @apiSuccess  {Object[]}  bodies              List of student government bodies.
 * @apiUse      BodyResponseObject
 */

/**
 * @api         {get}       /bodies/:uniqueId   Request information about a specific body
 * @apiVersion  1.0.0
 * @apiName     GetBody
 * @apiGroup    Bodies
 *
 * @apiUse      BodyUniqueIdParam
 * @apiUse      QueryOptionalFields
 *
 * @apiSuccess  {Object}    body                Student government body object
 * @apiUse      BodyResponseObject
 *

 */

/**
 * @api         {post}      /bodies             Creates a new body of student government
 * @apiVersion  1.0.0
 * @apiName     CreateBody
 * @apiGroup    Bodies
 *
 * @apiUse      BodyUniqueIdParam
 * @apiParam    {String}    name                The human-readable name of the body
 *
 * @apiSuccess  {Object}    body                Student government body object
 * @apiUse      BodyResponseObject
 */

/**
 * @api         {put}       /bodies/:uniqueId   Updates an existing body of student government
 * @apiVersion  1.0.0
 * @apiName     UpdateBody
 * @apiGroup    Bodies
 *
 * @apiUse      BodyUniqueIdParam
 * @apiParam    {String}    name                The new name to use for the body of student government
 *
 * @apiSuccess  {Object}    body                Student government body object
 * @apiUse      BodyResponseObject
 */

/**
 * @api         {delete}    /bodies/:uniqueId   Deletes an existing body of student government
 * @apiVersion  1.0.0
 * @apiName     DeleteBody
 * @apiGroup    Bodies
 *
 * @apiUse      BodyUniqueIdParam
 */

module.exports = (connection, DataTypes) => {
    const Body = connection.define('body', {
        uniqueId: {
            type: DataTypes.STRING,
            primaryKey: true,
            required: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            required: true
        }
    })

    Body.queryIncludes = () => {
        return [{
            model: connection.model('session'),
            attributes: ['fullUniqueId', 'uniqueId', 'name']
        },
        // {
        //     model: connection.model('master_subbody'),
        //     attributes: ['uniqueId', 'name']
        // }
        ]
    }

    Body.hasMany(connection.model('session'), { foreignKey: 'bodyUniqueId' })
    // Body.hasMany(connection.import('./master_subbody'), { foreignKey: 'bodyUniqueId' })

    return Body
}
