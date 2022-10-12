const db = require('../models/model');

const RESET = false;
const LOAD_DATA = false;

const confDatabase = function(){
    if(RESET){
        sequelize.sync({ force: false }).then(() => {
            if(LOAD_DATA) loadDummyData();
        }).catch(error => {
            console.log("Se ha producido un error al momento de intentar conectar c>");
        });
    }
}

const loadDummyData = function(){
    db['category'].bulkCreate([
        { name: 'Categoria 1', description: 'Descripción 1' },
        { name: 'Categoria 2', description: 'Descripción 2' },
        { name: 'Categoria 3', description: 'Descripción 3' }
    ]);
}

module.exports = { confDatabase }