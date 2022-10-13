//Express
const express = require('express');

//DB
const { confDatabase } = require("./src/utils/DatabaseUtils");

//Rutas
const { routes } = require('./src/routes/MainR');

// Utilidades necesarias para la configuración
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
app.use(express.json());
app.use(express.urlencoded({extended: false }));
app.use('/api/v1', routes);

//Puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    confDatabase();
    console.log(`Server is running on port ${PORT}.`);
});