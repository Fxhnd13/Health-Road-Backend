const { categoryRoutes } = require('./CategoryRoutes');
const { Router } = require('express');

const routes = Router();

routes.use('/category', categoryRoutes);

module.exports = { routes }