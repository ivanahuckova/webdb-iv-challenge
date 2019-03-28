exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes_with_ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes_with_ingredients').insert([
        { id: 1, recipe_id: 1, ingredient_id: 1, ingredient_amount: '5' },
        { id: 2, recipe_id: 2, ingredient_id: 2, ingredient_amount: '1' },
        { id: 3, recipe_id: 7, ingredient_id: 3, ingredient_amount: '1' },
        { id: 4, recipe_id: 8, ingredient_id: 4, ingredient_amount: '8' },
        { id: 5, recipe_id: 3, ingredient_id: 5, ingredient_amount: '1' },
        { id: 6, recipe_id: 5, ingredient_id: 6, ingredient_amount: '2' },
        { id: 7, recipe_id: 6, ingredient_id: 7, ingredient_amount: '2' },
        { id: 8, recipe_id: 1, ingredient_id: 8, ingredient_amount: '0.5' }
      ]);
    });
};
