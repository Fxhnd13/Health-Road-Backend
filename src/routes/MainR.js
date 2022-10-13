const categoryRouter = require('./CategoryR');
const { Router } = require('express');

const routes = Router();

routes.use('/category', categoryRouter);

module.exports = { routes }