
exports.up = function (knex, Promise) {
  return knex.schema.createTable('feedback_type', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('feedback_type');
};
