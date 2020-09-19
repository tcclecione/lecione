
exports.up = function (knex, Promise) {
  return knex.schema.createTable('features', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.boolean('active');
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('features');
};
