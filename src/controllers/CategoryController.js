const { StatusCodes } = require('http-status-codes');

function getCategory(req, res){
    res.status(StatusCodes.OK).send({msg: 'Funciona correctamente'});
}

module.exports = { getCategory }