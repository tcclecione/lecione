
exports.up = function (knex, Promise) {
  return knex.schema.createTable('department_office', function (table) {
    table.integer('office_id').unsigned();
    table.integer('department_id').unsigned();
    table.timestamps();

    table.foreign("office_id").references("id").inTable("office_employee");
    table.foreign("department_id").references("id").inTable("departments");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('department_office');
};
