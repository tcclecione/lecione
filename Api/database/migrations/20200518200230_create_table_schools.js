
exports.up = function (knex, Promise) {
  return knex.schema.createTable('schools', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.string('cnpj');
    table.string('image');
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('schools');
};
