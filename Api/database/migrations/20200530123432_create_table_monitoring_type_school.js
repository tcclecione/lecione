
exports.up = function (knex, Promise) {
  return knex.schema.createTable('monitoring_type_school', function (table) {
    table.increments('id').primary();
    table.integer('school_id').unsigned();
    table.integer('monitoring_type_id').unsigned();
    table.timestamps();

    table.foreign("school_id").references("id").inTable("schools");
    table.foreign("monitoring_type_id").references("id").inTable("monitoring_type");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('monitoring_type_school');
};
