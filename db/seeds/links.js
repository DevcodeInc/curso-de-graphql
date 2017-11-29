
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('links').del()
    .then(function () {
      // Inserts seed entries
      return knex('links').insert([
        {
          id: 1,
          url: 'https://devcode.la',
          description: 'bla bla bla',
          postedBy: 1
        },
        {
          id: 2,
          url: 'https://nicobytes.github.io',
          description: 'bla bla bla ble ble ble',
          postedBy: 1
        }
      ]);
    });
};
