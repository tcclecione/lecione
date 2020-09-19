
exports.up = function (knex, Promise) {
  return knex.schema.table('classrooms', function (table) {
    table.integer('grade')
    table.string('grade_type')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.table('classrooms', function (table) {
    table.dropColumn('grade')
    table.dropColumn('grade_type')
  })
};

