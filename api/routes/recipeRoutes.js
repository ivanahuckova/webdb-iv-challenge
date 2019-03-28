/*- `getRecipes()`: should return a list of all recipes in the database including the **dish** they belong to.
- `addRecipe(recipe)`: should add a **recipe** to the database and return the `id` of the new **recipe**. */
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

module.exports = routes;
