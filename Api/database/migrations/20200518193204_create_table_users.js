
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary();
    table.string('cpf', 16);
    table.integer('type_id').unsigned();
    table.string('password');
    table.integer('password_retrieve_cod', 4);
    table.timestamps();

    table.foreign("type_id").references("id").inTable("user_type");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users');
};
