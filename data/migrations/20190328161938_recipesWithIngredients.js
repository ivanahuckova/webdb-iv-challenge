exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes_with_ingredients', table => {
    table.increments('id');
    table.integer('recipe_id').notNullable();
    table.integer('ingredient_id').notNullable();
    table.integer('ingredient_amount').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes_with_ingredients');
};
