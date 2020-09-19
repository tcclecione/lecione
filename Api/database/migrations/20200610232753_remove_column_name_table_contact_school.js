
exports.up = function (knex, Promise) {
  return knex.schema.table('contact_school', function (table) {
    table.dropColumn('name')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.table('contact_school', function (table) {
    table.integer('name')
  })
};

