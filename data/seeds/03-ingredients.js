exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_id: 1, ingredient_name: 'taco', ingredient_meassurment: 'pc' },
        { ingredient_id: 2, ingredient_name: 'pizza dough', ingredient_meassurment: 'pc' },
        { ingredient_id: 3, ingredient_name: 'cocnut milk', ingredient_meassurment: 'can' },
        { ingredient_id: 4, ingredient_name: 'curry paste', ingredient_meassurment: 'tablespoon' },
        { ingredient_id: 5, ingredient_name: 'tomatos', ingredient_meassurment: 'cup' },
        { ingredient_id: 6, ingredient_name: 'salad', ingredient_meassurment: 'cup' },
        { ingredient_id: 7, ingredient_name: 'cheese', ingredient_meassurment: 'cup' }
      ]);
    });
};
