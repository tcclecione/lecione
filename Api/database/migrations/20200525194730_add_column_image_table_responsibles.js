
exports.up = function (knex, Promise) {
  return knex.schema.table('responsibles', function (table) {
    table.string('image', 400);

  })
};

exports.down = function (knex, Promise) {
  return knex.schema.table('responsibles', function (table) {
    table.dropColumn('image')
  })
};

