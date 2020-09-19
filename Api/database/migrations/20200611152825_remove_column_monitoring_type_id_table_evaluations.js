
exports.up = function (knex, Promise) {
  return knex.schema.table('evaluations', function (table) {
    table.dropForeign(['monitoring_type_id'])
    table.dropColumn('monitoring_type_id')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.table('evaluations', function (table) {
    table.integer('monitoring_type_id')
  })
};

