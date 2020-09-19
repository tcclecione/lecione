
exports.up = function (knex, Promise) {
  return knex.schema.createTable('period_monitoring_type', function (table) {
    table.integer('monitoring_type_school_id').unsigned();
    table.string('period', 32)
    table.timestamps();

    table.foreign("monitoring_type_school_id").references("id").inTable("monitoring_type_school");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('period_monitoring_type');
};
