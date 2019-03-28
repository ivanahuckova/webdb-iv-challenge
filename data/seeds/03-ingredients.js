exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'taco' },
        { ingredient_name: 'pizza dough' },
        { ingredient_name: 'cocnut milk' },
        { ingredient_name: 'curry paste' },
        { ingredient_name: 'tomatos' },
        { ingredient_name: 'salad' },
        { ingredient_name: 'cheese' }
      ]);
    });
};
