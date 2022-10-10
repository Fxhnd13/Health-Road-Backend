const { loadDummyData } = require("./src/models/DatabaseUtilities");
const cors = require('cors');
const express = require('express');
const {sequelize} = require("./src/models/Connection");

// Utilidades necesarias para la configuración
require('dotenv').config();
const app = express();

// Si está activada la sincronización, reinicia la base de datos y carga datos 'dummy'
if(process.env.DB_SYNC==='1'){ sequelize.sync({ force: true }); loadDummyData(); }

// Configuración básica de app
app.use(cors());
app.listen(process.env.PORT || 3000);
console.log('*******************************');
console.log('*****Servidor iniciado*********');
console.log('*******************************');