
exports.up = function (knex, Promise) {
  return knex.schema.createTable('evaluations', function (table) {
    table.increments('id').primary();
    table.integer('feedback_type_id').unsigned();
    table.integer('complementary_course_type_id').unsigned();
    table.integer('monitoring_type_id').unsigned();
    table.integer('user_id').unsigned();
    table.integer('rating', 11);
    table.string('comment', 400);
    table.timestamps();

    table.foreign("feedback_type_id").references("id").inTable("feedback_type");
    table.foreign("complementary_course_type_id").references("id").inTable("complementary_course_type");
    table.foreign("monitoring_type_id").references("id").inTable("monitoring_type");
    table.foreign("user_id").references("id").inTable("users");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('evaluations');
};
