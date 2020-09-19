
exports.up = function (knex, Promise) {
  return knex.schema.createTable('contact_school', function (table) {
    table.increments('id').primary();
    table.integer('school_id').unsigned();
    table.string('name');
    table.string('phone', 16);
    table.string('email');
    table.timestamps();

    table.foreign("school_id").references("id").inTable("schools");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('contact_school');
};
