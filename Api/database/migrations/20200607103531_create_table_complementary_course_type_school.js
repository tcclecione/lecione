
exports.up = function (knex, Promise) {
  return knex.schema.createTable('complementary_course_type_school', function (table) {
    table.increments('id').primary();
    table.integer('course_type_id').unsigned();
    table.integer('school_id').unsigned();
    table.integer('course_type_about_id').unsigned();
    table.timestamps();

    table.foreign("course_type_id").references("id").inTable("complementary_course_type");
    table.foreign("school_id").references("id").inTable("schools");
    table.foreign("course_type_about_id").references("id").inTable("complementary_course_type_about");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('complementary_course_type_school');
};