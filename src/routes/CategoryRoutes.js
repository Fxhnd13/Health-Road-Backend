const { Router } = require('express');
const categoryRoutes = Router();

const { getCategory } = require('../controllers/CategoryController');
const { checkCreate } = require("../validators/CategoryIntegrityValidator");
const { hasErrors } = require("../validators/IntegrityUtils");

categoryRoutes.get('',
    //heckCreate(),
    //hasErrors,
    getCategory
);

module.exports = { categoryRoutes }