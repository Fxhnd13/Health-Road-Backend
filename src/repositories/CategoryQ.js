const Category = require('../models/models/Category');

class CategoryRepository {

    async findCategoryById(id){
        return Category.findOne({where: { id: id }, raw: true}).then(result=>{
            return result;
        }).catch(reason => {
            console.log(reason);
            return null;
        });
    }

    async saveCategory(category){
        return Category.create({...category}).then(result=>{
            console.log(result);
            return result;
        }).catch(error=>{
            console.log(error);
            return null;
        });
    }

    async updateCategory(id, category){
        return Category.update({...category}, {where: {id: id}}).then(result=>{
            console.log(result);
            return result;
        }).catch(error=>{
            console.log(error);
            return null;
        });
    }

    async deleteCategoryById(id){
        return Category.destroy({where: {id: id}}).then(result=>{
            console.log(result);
            return result;
        }).catch(error=>{
            console.log(error);
            return null;
        })
    }

}

module.exports = CategoryRepository;