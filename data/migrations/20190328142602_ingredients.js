exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', table => {
    table.increments('ingredient_id');
    table.string('ingredient_name', 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};
