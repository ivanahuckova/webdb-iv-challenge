exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([{ ingredient_name: 'pepper' }, { ingredient_name: 'cilantro' }, { ingredient_name: 'corn' }]);
    });
};
