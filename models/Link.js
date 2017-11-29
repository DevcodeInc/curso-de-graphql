const { Model } = require('objection');

class Link extends Model {
  
  static get tableName () {
    return 'links'
  }
};

module.exports = Link;