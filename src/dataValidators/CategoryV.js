const { body, param, query } = require('express-validator');

class CategoryValidator{

    checkGet(){
        console.log('Pasó por el chequeo');
        return [
            param('id').notEmpty()
        ]
    }

     checkCreate(){
        return []
    }

    checkUpdate(){
         return []
    }

    checkDelete(){
         return []
    }
}

module.exports = CategoryValidator;