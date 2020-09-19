
exports.up = function (knex, Promise) {
  return knex.schema.table('evaluations', function (table) {
    table.integer('monitoring_type_school_id').unsigned();

    table.foreign("monitoring_type_school_id").references("id").inTable("monitoring_type_school");
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.table('evaluations', function (table) {
    table.dropForeign(['monitoring_type_school_id'])
    table.dropColumn('monitoring_type_school_id')
  })
};

