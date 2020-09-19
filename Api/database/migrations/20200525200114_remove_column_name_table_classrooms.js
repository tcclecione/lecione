
exports.up = function (knex, Promise) {
  return knex.schema.table('classrooms', function (table) {
    table.dropColumn('name')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.table('classrooms', function (table) {
    table.integer('name')
  })
};

