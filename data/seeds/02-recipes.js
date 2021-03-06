exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_id: 1, recipe: 'Recipe for crunchy taco', dish_id: 1 },
        { recipe_id: 2, recipe: 'Recipe for cauliflower pizza', dish_id: 2 },
        { recipe_id: 3, recipe: 'Recipe for breakfast taco', dish_id: 1 },
        { recipe_id: 4, recipe: 'Recipe for breakfast pizza', dish_id: 2 },
        { recipe_id: 5, recipe: 'Recipe for caesar salad', dish_id: 4 },
        { recipe_id: 6, recipe: 'Recipe for greek salad', dish_id: 4 },
        { recipe_id: 7, recipe: 'Recipe for red curry', dish_id: 3 },
        { recipe_id: 8, recipe: 'Recipe for green curry', dish_id: 3 }
      ]);
    });
};
