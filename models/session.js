'use strict'

/**
 * @apiDefine SessionUniqueIdParam
 *
 * @apiParam    {String}    bodyUniqueId        Unique, string identifier for the associated body
 * @apiParam    {String}    uniqueId            Unique, string identifier for the session
 */

/**
 * @apiDefine SessionResponseObject
 *
 * @apiSuccess  {String}    .uniqueId           Unique, string identifier that serves as the permanent URL for the session
 * @apiSuccess  {String}    .bodyUniqueId       Unique, string identifier for the body that the session is tied to
 * @apiSuccess  {String}    .name               The human-readable name of the session
 * @apiSuccess  {String}    .createdAt          The timestamp that the body was created at (ISO format)
 * @apiSuccess  {String}    .updatedAt          The timestamp that the body was last updated at (ISO format)
 * @apiSuccess  {String}    .body               The associated body object
 * @apiSuccess  {String}    .body.name          The name of the associated body
 * @apiSuccess  {String}    .body.uniqueId      Unique, string identifier for the associated body (same as `bodyUniqueId`)
 */

/**
 * @api         {get}       /sessions               List sessions
 * @apiVersion  1.0.0
 * @apiName     ListSessions
 * @apiGroup    Sessions
 * @apiDescription          Request information about all sessions of the bodies of student government
 *
 * @apiUse      QueryOptionalFields
 *
 * @apiSuccess  {Object[]}  sessions                List of sessions of student government bodies.
 * @apiUse      SessionResponseObject
 */

/**
 * @api         {get}       /sessions/:bodyUniqueId/:uniqueId       Get session
 * @apiVersion  1.0.0
 * @apiName     GetSession
 * @apiGroup    Sessions
 * @apiDescription          Request information about a specific session of a specific body
 *
 * @apiUse      SessionUniqueIdParam
 * @apiUse      QueryOptionalFields
 *
 * @apiSuccess  {Object}    session                 Session object
 * @apiUse      SessionResponseObject
 */

/**
 * @api         {post}      /sessions             Create session
 * @apiVersion  1.0.0
 * @apiName     CreateSession
 * @apiGroup    Sessions
 * @apiDescription          Creates a new session for a body of student government
 *
 * @apiUse      SessionUniqueIdParam
 * @apiParam    {String}    name                   The human-readable name of the session
 */

/**
 * @api         {put}       /sessions/:bodyUniqueId/:uniqueId       Update session
 * @apiVersion  1.0.0
 * @apiName     UpdateSession
 * @apiGroup    Sessions
 * @apiDescription          Updates an existing session of a body of student government
 *
 * @apiUse      SessionUniqueIdParam
 * @apiParam    {String}    name                The new name to use for the session
 */

/**
 * @api         {delete}    /sessions/:bodyUniqueId/:uniqueId       Delete session
 * @apiVersion  1.0.0
 * @apiName     DeleteSession
 * @apiGroup    Sessions
 * @apiDescription          Deletes an existing session
 *
 * @apiUse      SessionUniqueIdParam
 * @apiUse      NotFoundError
 */

module.exports = (connection, DataTypes) => {
    let Session = connection.define('session', {
        bodyUniqueId: {
            type: DataTypes.STRING,
            primaryKey: true,
            required: true
        },
        uniqueId: {
            type: DataTypes.STRING,
            primaryKey: true,
            required: true
        },
        name: {
            type: DataTypes.STRING,
            required: true
        },
        fullUniqueId: {
            type: new DataTypes.VIRTUAL(DataTypes.STRING, [
                'uniqueId', 'bodyUniqueId'
            ]),
            get() {
                return this.get('bodyUniqueId') + '/' + this.get('uniqueId')
            }
        }
    })

    Session.associate = models => {
        Session.belongsTo(models['body'], {
            foreignKey: 'bodyUniqueId'
        })
    }

    Session.queryIncludes = (connection) => {
        return [
            { model: connection.model('body') }
        ]
    }

    return Session
}
