exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', table => {
    table.increments('dish_id');
    table.string('name', 128).notNullable();
  });
};

exports.down = function(knex, Promise) {};
