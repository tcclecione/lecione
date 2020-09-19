
exports.up = function (knex, Promise) {
  return knex.schema.createTable('feature_school', function (table) {
    table.increments('id').primary();
    table.integer('feature_id').unsigned();
    table.integer('school_id').unsigned();
    table.timestamps();

    table.foreign("feature_id").references("id").inTable("features");
    table.foreign("school_id").references("id").inTable("schools");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('feature_school');
};
