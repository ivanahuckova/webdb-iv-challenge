/*
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

// ========== POST ROUTES ========== //
routes.post('/', async (req, res) => {
  try {
    const newDish = await db('dishes').insert({ dish_name: req.body.dish_name });
    res.status(201).json(newDish[0]);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = routes;
