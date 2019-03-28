const express = require('express');
const dishRoutes = require('./routes/dishRoutes');
const recipeRoutes = require('./routes/recipeRoutes');

const server = express();

server.use(express.json);

server.use('/dishes', dishRoutes);
server.use('/recipes', recipeRoutes);

module.exports = server;
