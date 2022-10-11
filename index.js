//Express
const express = require('express');

//DB
const { loadDummyData } = require("./src/utils/DatabaseUtils");
const sequelize = require('./src/models/Connection');
require('./src/models/model');

//Rutas
const { routes } = require('./src/routes/MainRoutes');

// Utilidades necesarias para la configuración
require('dotenv').config();
const app = express();

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

// Configuración básica de app
app.use('/api/v1', routes);

//Puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  
      sequelize.sync({ force: false }).then(() => { //Cambiar a true para que la db se actualice (si se hicieron modificaciones o no se ha creado) sino dejar en false
        console.log("Conexion establecida");
      }).catch(error => {
        console.log("Se ha producido un error al momento de intentar conectar c>");
      })
});