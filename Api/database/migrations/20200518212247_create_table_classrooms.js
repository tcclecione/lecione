
exports.up = function (knex, Promise) {
  return knex.schema.createTable('classrooms', function (table) {
    table.increments('id').primary();
    table.integer('school_id').unsigned();
    table.string('name');
    table.string('room_number');
    table.timestamps();

    table.foreign("school_id").references("id").inTable("schools");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('classrooms');
};
