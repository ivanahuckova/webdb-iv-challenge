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

routes.get('/:id', async (req, res) => {
  try {
    const specificDish = await db('dishes')
      .join('recipes', { 'recipes.dish_id': 'dishes.dish_id' })
      .where({ 'recipes.dish_id': req.params.id });
    res.status(200).json(specificDish);
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
