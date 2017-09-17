'use strict'

/**
 * @api {get} /bodies Request all bodies of student government
 * @apiName GetBodies
 * @apiGroup Bodies
 *
 * @apiSuccess  {Object[]}  bodies              List of student government bodies.
 * @apiSuccess  {String}    bodies.uniqueId     Unique, string identifier that should serve as the permanent URL for the body
 * @apiSuccess  {String}    bodies.name         The human-readable name of the body
 * @apiSuccess  {String}    bodies.createdAt    The timestamp that the body was created at (ISO format)
 * @apiSuccess  {String}    bodies.updatedAt    The timestamp that the body was last updated at (ISO format)
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
        {
            model: connection.model('master_subbody'),
            attributes: ['uniqueId', 'name']
        }]
    }

    Body.hasMany(connection.model('session'), { foreignKey: 'bodyUniqueId' })
    // Body.hasMany(connection.import('./master_subbody'), { foreignKey: 'bodyUniqueId' })

    return Body
}
