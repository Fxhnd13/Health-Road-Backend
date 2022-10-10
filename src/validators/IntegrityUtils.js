const { StatusCodes } = require('http-status-codes');
const { validationResult } = require('express-validator');

function hasErrors(req, res){
    const errors = validationResult(req);
    if(errors.isEmpty()){
        return false;
    }else{
        res.status(StatusCodes.UNPROCESSABLE_ENTITY).send({msg: 'Error en la integridad de los datos enviados', errors: errors.array()});
        return true;
    }
}

module.exports = { hasErrors }