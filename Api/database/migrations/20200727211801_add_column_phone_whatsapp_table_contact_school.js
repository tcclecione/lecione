
exports.up = function (knex, Promise) {
  return knex.schema.table('contact_school', function (table) {
    table.string('phone_whatsapp', 16)
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.table('contact_school', function (table) {
    table.dropColumn('phone_whatsapp')
  })
};

