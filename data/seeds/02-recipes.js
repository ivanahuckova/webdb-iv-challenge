exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([{ recipe: 'Recipe for crunchy taco', dish_id: 1 }, { recipe: 'Recipe for cauliflower picca', dish_id: 1 }, { recipe: 'Recipe for tofu taco', dish_id: 1 }]);
    });
};
