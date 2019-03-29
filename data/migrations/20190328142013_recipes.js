exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', table => {
    table.increments('recipe_id');
    table.string('recipe', 128).notNullable();
    table.integer('dish_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
