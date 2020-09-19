
exports.up = function (knex, Promise) {
  return knex.schema.table('monitoring_type', function (table) {
    table.dropForeign(['employee_id'])
    table.dropColumn('employee_id')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.table('monitoring_type', function (table) {
    table.integer('employee_id')
  })
};

