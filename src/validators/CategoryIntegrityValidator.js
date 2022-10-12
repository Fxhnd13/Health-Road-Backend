const { body } = require('express-validator');

function checkCreate(){
    return [
        body('description').notEmpty().withMessage('La descripción es obligatoria'),
        body('name').notEmpty().withMessage('El nombre de la categoría es obligatorio')
    ]
}

module.exports = { checkCreate }