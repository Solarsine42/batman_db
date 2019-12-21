exports.up = function(knex, Promise) {
  return knex.schema.createTable("messages", function(table) {
    table.increments().unique();
    table.string("name").notNullable();
    table.string("message").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("messages");
};
