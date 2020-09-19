
exports.up = function (knex, Promise) {
  return knex.schema.table('schools', function (table) {
    table.string('description', 400);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.table('schools', function (table) {
    table.dropColumn('description')
  })
};

