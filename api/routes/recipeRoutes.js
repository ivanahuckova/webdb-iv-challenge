const express = require('express');
const knex = require('knex');

const knexConfig = require('../../knexfile.js').development;
const db = knex(knexConfig);

const routes = express.Router();

// ========= GET ROUTES ========= //
routes.get('/', async (req, res) => {
  try {
    const allRecipes = await db('recipes').join('dishes', { 'recipes.dish_id': 'dishes.dish_id' });
    res.status(200).json(allRecipes);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ========= POST ROUTES ========= //
routes.post('/', async (req, res) => {
  try {
    if (req.body.recipe && req.body.dish_id) {
      const newRecipe = await db('recipes').insert({ recipe: req.body.recipe, dish_id: req.body.dish_id });
      res.status(201).json(newRecipe[0]);
    } else {
      res.status(400).json({ message: "You need to insert 'recipe' and 'dish_id'" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = routes;
