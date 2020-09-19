
exports.up = function (knex, Promise) {
  return knex.schema.table('evaluations', function (table) {
    table.dropForeign(['feedback_type_id'])
    table.dropColumn('feedback_type_id')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.table('evaluations', function (table) {
    table.integer('feedback_type_id')
  })
};

