/*- `getDishes()`: should return a list of all dishes in the database.
- `addDish(dish)`: should add the **dish** to the database and return the `id` of the new **dish**.
- `getDish(id)`: should return the **dish** with the provided `id` and include a list of the related recipes. */

const express = require('express');
const knex = require('knex');

const knexConfig = require('../../knexfile.js').development;
const db = knex(knexConfig);

const routes = express.Router();

// ========== GET ROUTES ========== //

routes.get('/', async (req, res) => {
  try {
    const allDishes = await db('dishes');
    res.status(200).json(allDishes);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = routes;
