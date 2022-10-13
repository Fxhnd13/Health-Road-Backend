const { Router } = require('express');
const categoryRouter = Router();

const CategoryController = require('../controllers/CategoryC');
const CategoryValidator = require("../dataValidators/CategoryV");
const { hasErrors } = require("../dataValidators/IntegrityUtils");

categoryRouter.get('/:id', new CategoryController().getCategory);
categoryRouter.post('', new CategoryController().createCategory);
categoryRouter.put('/:id', new CategoryController().updateCategory);
categoryRouter.delete('/:id', new CategoryController().deleteCategory);

module.exports = categoryRouter;