
exports.up = function (knex, Promise) {
  return knex.schema.createTable('complementary_courses', function (table) {
    table.increments('id').primary();
    table.string('task');
    table.float('note', 4, 2);
    table.date('evaluation_day');
    table.float('evaluation_note', 4, 2);
    table.string('evaluation_resume');
    table.timestamps();

  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('complementary_courses');
};
