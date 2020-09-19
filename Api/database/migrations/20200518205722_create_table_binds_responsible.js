
exports.up = function (knex, Promise) {
  return knex.schema.createTable('binds_responsible', function (table) {
    table.increments('id').primary();
    table.integer('responsible_id').unsigned();
    table.integer('school_id').unsigned();
    table.timestamps();

    table.foreign("responsible_id").references("id").inTable("responsibles");
    table.foreign("school_id").references("id").inTable("schools");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('binds_responsible');
};
