
exports.up = function(knex, Promise) {
  Promise.all([
    knex.schema.createTable('users', (table) => {
      table.increments('id').primary().unsigned()
      table.string('name')
      table.string('email')
    })
  ])
};

exports.down = function(knex, Promise) {
  Promise.all([
    knex.schema.dropTable('users')
  ])
};
