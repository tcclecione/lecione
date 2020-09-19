exports.up = function(knex, Promise) {
  return knex.schema.table("feedback_type", function(table) {
    table.string("icon", 100);
    table.string("color", 100);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("feedback_type", function(table) {
    table.dropColumn("icon");
    table.dropColumn("color");
  });
};
