const { Model } = require('objection');
const path = require('path');

class Link extends Model {
  
  static get tableName () {
    return 'links'
  }

  static get relationMappings () {
    return {
      postedBy: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, '/User'),
        join: {
          from: 'links.postedBy',
          to: 'users.id'
        }
      },
    }
  }
};

module.exports = Link;