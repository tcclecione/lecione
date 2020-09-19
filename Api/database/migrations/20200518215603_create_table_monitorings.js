
exports.up = function (knex, Promise) {
  return knex.schema.createTable('monitorings', function (table) {
    table.increments('id').primary();
    table.integer('monitoring_type_id').unsigned();
    table.integer('student_id').unsigned();
    table.string('anamnesis');
    table.string('complementary_exam');
    table.datetime('consult_time');
    table.string('consult_resume');
    table.timestamps();

    table.foreign("monitoring_type_id").references("id").inTable("monitoring_type");
    table.foreign("student_id").references("id").inTable("students");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('monitorings');
};
