
exports.up = function (knex, Promise) {
  return knex.schema.table('monitoring_type_school', function (table) {
    table.integer('monitoring_type_about_id').unsigned();

    table.foreign("monitoring_type_about_id").references("id").inTable("monitoring_type_about");
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.table('monitoring_type_school', function (table) {
    table.dropColumn('monitoring_type_about_id')
  })
};

