
exports.up = function (knex, Promise) {
  return knex.schema.createTable('period_school', function (table) {
    table.integer('school_id').unsigned();
    table.string('period', 32)
    table.timestamps();

    table.foreign("school_id").references("id").inTable("schools");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('period_school');
};
