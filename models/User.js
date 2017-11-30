const { Model } = require('objection');
const path = require('path');

class User extends Model {
  
  static get tableName () {
    return 'users'
  }

  static get relationMappings () {
    return {
      links: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, '/Link'),
        join: {
          from: 'users.id',
          to: 'links.postedBy'
        }
      }
    }
  }
};

module.exports = User;