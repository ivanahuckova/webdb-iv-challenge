exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('dishes').insert([
        { dish_id: 1, dish_name: 'taco' },
        { dish_id: 2, dish_name: 'pizza' },
        { dish_id: 3, dish_name: 'curry' },
        { dish_id: 4, dish_name: 'salad' },
        { dish_id: 5, dish_name: 'pasta' }
      ]);
    });
};
