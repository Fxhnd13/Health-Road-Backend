const { loadDummyData } = require("./src/utils/DatabaseUtils");
const {sequelize} = require("./src/models/Connection");
const { routes } = require('./src/routes/MainRoutes');
const express = require('express');
const cors = require('cors');

// Utilidades necesarias para la configuración
require('dotenv').config();
const app = express();

// Si está activada la sincronización, reinicia la base de datos y carga datos 'dummy'
if(process.env.DB_SYNC==='1'){ sequelize.sync({ force: true }); loadDummyData(); }

// Configuración básica de app
app.use(cors());
app.listen(process.env.PORT || 3000);
app.use('/api/v1', routes);
console.log('*******************************');
console.log('*****Servidor iniciado*********');
console.log('*******************************');