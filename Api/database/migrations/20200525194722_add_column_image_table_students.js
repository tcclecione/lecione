
exports.up = function (knex, Promise) {
  return knex.schema.table('students', function (table) {
    table.string('image', 400);

  })
};

exports.down = function (knex, Promise) {
  return knex.schema.table('students', function (table) {
    table.dropColumn('image')
  })
};

