
exports.up = function (knex, Promise) {
  return knex.schema.table('monitoring_type_about', function (table) {
    table.dropForeign(['monitoring_type_school_id'])
    table.dropColumn('monitoring_type_school_id')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.table('monitoring_type_about', function (table) {
    table.integer('monitoring_type_school_id')
  })
};

