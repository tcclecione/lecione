
exports.up = function (knex, Promise) {
  return knex.schema.createTable('feedbacks', function (table) {
    table.increments('id').primary();
    table.integer('student_id').unsigned();
    table.integer('feedback_type_id').unsigned();
    table.string('description');
    table.timestamps();

    table.foreign("student_id").references("id").inTable("students");
    table.foreign("feedback_type_id").references("id").inTable("feedback_type");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('feedbacks');
};
