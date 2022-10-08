const { sequelize } = require('src/models/Connection');
const { loadDummyData } = require("./src/models/DummyData");
require('dotenv').config();

if(process.env.DB_SYNC){ sequelize.sync({force: true }); loadDummyData(); } //Si está activada la sincronización reinicia la base de datos

