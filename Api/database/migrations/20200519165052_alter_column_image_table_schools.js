
exports.up = function (knex, Promise) {
  return knex.schema.raw(`
    ALTER TABLE schools MODIFY image VARCHAR(400);
  `);
};

exports.down = function (knex) {
  return knex.schema.raw(`
    ALTER TABLE schools MODIFY image VARCHAR(255);
  `);
};
