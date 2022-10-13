const { StatusCodes } = require('http-status-codes');
const CategoryRepository = require('../repositories/CategoryQ');

class CategoryController {

    getCategory(req, res){
        new CategoryRepository().findCategoryById(req.params.id).then(category=>{
            res.status((category)? StatusCodes.OK : StatusCodes.NOT_FOUND).send(category);
        });
    }

    createCategory(req, res){
        new CategoryRepository().saveCategory(req.body).then(result=>{
            result
                ? res.status(StatusCodes.OK).send({msg: 'Se ha creado la categoria exitosamente'})
                : res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({msg: 'Ha ocurrido un error al crear la categoria'});
        });
    }

    updateCategory(req, res){
        new CategoryRepository().updateCategory(req.params.id, req.body).then(result=>{
            result
                ? res.status(StatusCodes.OK).send({msg: 'Se ha actualizado la categoria exitosamente'})
                : res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({msg: 'Ha ocurrido un error al intentar actualizar la categoria'});
        })
    }

    deleteCategory(req, res){
        new CategoryRepository().deleteCategoryById(req.params.id).then(result=>{
            result
                ? res.status(StatusCodes.OK).send({msg: 'Se ha eliminado la categoria exitosamente'})
                : res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({msg: 'Ha ocurrido un error al intentar eliminar la categoria'});
        })
    }

}

module.exports = CategoryController;