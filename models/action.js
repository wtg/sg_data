'use strict'

const Sequelize = require('sequelize')
const _ = require('lodash')
const showdown = require('showdown')
const converter = new showdown.Converter()

module.exports = (connection, DataTypes) => {
    const Action = connection.define('action', {
        actionIndicator: {
            type: DataTypes.VIRTUAL(DataTypes.STRING, [
                'bodyUniqueId', 'sessionUniqueId', 'meetingNum', 'actionNum'
            ]),
            get() {
                return this.getDataValue('bodyUniqueId')[0].toUpperCase() + '.' +
                    this.getDataValue('sessionUniqueId') + '.' +
                    this.getDataValue('meetingNum') + '.' +
                    this.getDataValue('actionNum')
            }
        },
        bodyUniqueId: {
            type: DataTypes.STRING,
            primaryKey: true,
            required: true
        },
        sessionUniqueId: {
            type: DataTypes.STRING,
            primaryKey: true,
            required: true
        },
        meetingNum: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        actionNum: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING,
            required: true
        },
        text: {
            type: DataTypes.TEXT,
            required: true
        },
        textHtml: {
            type: DataTypes.VIRTUAL(DataTypes.STRING, [
                'text'
            ]),
            get() {
                return converter.makeHtml(this.get('text') || '')
            }
        },
        status: {
            type: DataTypes.TEXT,
            required: true
        },
        votesFor: {
            type: DataTypes.INTEGER,
            default: 0
        },
        votesAgainst: {
            type: DataTypes.INTEGER,
            default: 0
        },
        abstentions: {
            type: DataTypes.INTEGER,
            default: 0
        },
        movingSubbodyUniqueId: {
            type: DataTypes.STRING,
            required: false
        },
        movingOtherEntity: {
            type: DataTypes.STRING,
            required: false
        }
    })

    Action.associate = models => {
        Action.belongsTo(models['meeting'], {
            targetKey: 'sessionUniqueId',
            foreignKey: 'sessionUniqueId'
        })

        Action.belongsTo(models['meeting'], {
            targetKey: 'bodyUniqueId',
            foreignKey: 'bodyUniqueId'
        })

        Action.belongsTo(models['meeting'], {
            targetKey: 'meetingNum',
            foreignKey: 'meetingNum'
        })

        Action.belongsTo(models['membership'], { as: 'movingMember' })
        Action.belongsTo(models['membership'], { as: 'secondingMember' })

        Action.belongsTo(models['subbody'], {
            targetKey: 'uniqueId',
            foreignKey: 'movingSubbodyUniqueId',
            required: false
        })

        Action.belongsTo(models['subbody'], {
            targetKey: 'bodyUniqueId',
            foreignKey: 'bodyUniqueId',
            required: false
        })

        Action.belongsTo(models['subbody'], {
            targetKey: 'sessionUniqueId',
            foreignKey: 'sessionUniqueId',
            required: false
        })
    }

    Action.queryIncludes = (connection) => {
        return [
            {
                model: connection.model('membership'),
                as: 'movingMember',
                include: [{
                    model: connection.model('person'),
                    attributes: [ 'name', 'rcsId' ]
                }]
            },
            {
                model: connection.model('membership'),
                as: 'secondingMember',
                include: [{
                    model: connection.model('person'),
                    attributes: [ 'name', 'rcsId' ]
                }]
            },
            {
                model: connection.model('subbody'),
                required: false,
                where: {
                    $and: {
                        uniqueId: { $eq: Sequelize.col('action.movingSubbodyUniqueId') },
                        sessionUniqueId: { $eq: Sequelize.col('action.sessionUniqueId') },
                        bodyUniqueId: { $eq: Sequelize.col('action.bodyUniqueId') }
                    }
                }
            },
            {
                model: connection.model('meeting'),
                where: {
                    $and: {
                        meetingNum: { $eq: Sequelize.col('action.meetingNum') },
                        sessionUniqueId: { $eq: Sequelize.col('action.sessionUniqueId') },
                        bodyUniqueId: { $eq: Sequelize.col('action.bodyUniqueId') }
                    }
                }
            }
        ]
    }

    Action.milestones = {
        list: {
            fetch: {
                action: function(req, res, context) {
                    let self = this,
                        model = this.model,
                        options = context.options || {},
                        criteria = context.criteria || {},
                        include = this.include,
                        includeAttributes = this.includeAttributes,
                        Sequelize = this.resource.sequelize,
                        defaultCount = 100,
                        count = +context.count || +req.query.count || defaultCount,
                        offset = +context.offset || +req.query.offset || 0;

                    var stringOperators = /like|iLike|notLike|notILike/;

                    // only look up attributes we care about
                    options.attributes = options.attributes || this.resource.attributes;

                    // account for offset and count
                    offset += context.page * count || req.query.page * count || 0;
                    if (count < 0) count = defaultCount;

                    options.offset = offset;
                    options.limit = count;
                    if (!this.resource.pagination)
                        delete options.limit;

                    if (context.include && context.include.length) {
                        include = include.concat(context.include);
                    }
                    if (include.length) {
                        options.include = include;
                    }

                    var searchParams = this.resource.search.length ? this.resource.search : [this.resource.search];
                    searchParams.forEach(function(searchData) {
                        var searchParam = searchData.param;
                        if (_.has(req.query, searchParam)) {
                            var search = [];
                            var searchOperator = searchData.operator || '$like';
                            var searchAttributes =
                                searchData.attributes || Object.keys(model.rawAttributes);
                            searchAttributes.forEach(function(attr) {
                                if(stringOperators.test(searchOperator)){
                                    var attrType = model.rawAttributes[attr].type;
                                    if (!(attrType instanceof Sequelize.STRING) &&
                                        !(attrType instanceof Sequelize.TEXT)) {
                                        // NOTE: Sequelize has added basic validation on types, so we can't get
                                        //       away with blind comparisons anymore. The feature is up for
                                        //       debate so this may be changed in the future
                                        return;
                                    }
                                }

                                var item = {};
                                var query = {};
                                var searchString;
                                if (!~searchOperator.toLowerCase().indexOf('like')) {
                                    searchString = req.query[searchParam];
                                } else {
                                    searchString = '%' + req.query[searchParam] + '%';
                                }
                                query[searchOperator] = searchString;
                                item[attr] = query;
                                search.push(item);
                            });

                            if (Object.keys(criteria).length)
                                criteria = Sequelize.and(criteria, Sequelize.or.apply(null, search));
                            else
                                criteria = Sequelize.or.apply(null, search);
                        }
                    });

                    var sortParam = this.resource.sort.param;
                    if (_.has(req.query, sortParam) || _.has(this.resource.sort, 'default')) {
                        var order = [];
                        var columnNames = [];
                        var sortQuery = req.query[sortParam] || this.resource.sort.default || '';
                        var sortColumns = sortQuery.split(',');
                        sortColumns.forEach(function(sortColumn) {
                            if (sortColumn.indexOf('-') === 0) {
                                var actualName = sortColumn.substring(1);
                                order.push([actualName, 'DESC']);
                                columnNames.push(actualName);
                            } else {
                                columnNames.push(sortColumn);
                                order.push([sortColumn, 'ASC']);
                            }
                        });
                        var allowedColumns = this.resource.sort.attributes || Object.keys(model.rawAttributes);

                        if (order.length)
                            options.order = order;
                    } else {
                        options.order = [
                            [ connection.model('meeting'), 'date', 'DESC' ],
                            [ 'actionNum', 'DESC' ]
                        ];
                    }

                    // all other query parameters are passed to search
                    var extraSearchCriteria = _.reduce(req.query, function(result, value, key) {
                        if (_.has(model.rawAttributes, key)) result[key] = self._safeishParse(value, model.rawAttributes[key].type, Sequelize);
                        return result;
                    }, {});

                    if (Object.keys(extraSearchCriteria).length)
                        criteria = _.assign(criteria, extraSearchCriteria);

                    // do the actual lookup
                    if (Object.keys(criteria).length)
                        options.where = criteria;

                    if (req.query.scope) {
                        model = model.scope(req.query.scope);
                    }

                    return model
                        .findAndCountAll(options)
                        .then(function(result) {
                            context.instance = result.rows;
                            var start = offset;
                            var end = start + result.rows.length - 1;
                            end = end === -1 ? 0 : end;

                            if (self.resource.associationOptions.removeForeignKeys) {
                                _.each(context.instance, function(instance) {
                                    _.each(includeAttributes, function(attr) {
                                        delete instance[attr];
                                        delete instance.dataValues[attr];
                                    });
                                });
                            }

                            if (!!self.resource.pagination)
                                res.header('Content-Range', 'items ' + [[start, end].join('-'), result.count].join('/'));

                            return context.continue;
                        });
                },
                after: function(req, res, context) {
                    context.instance.sort((a, b) => {
                        if(a.dataValues.meeting.date > b.dataValues.meeting.date) {
                            return -1;
                        } else if(a.dataValues.meeting.date < b.dataValues.meeting.date) {
                            return 1;
                        } else {
                            return 0;
                        }
                    })

                    return context.continue
                }
            }
        }
    }

    return Action
}
