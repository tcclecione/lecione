
exports.up = function (knex, Promise) {
  return knex.schema.createTable('user_type', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('user_type');
};
