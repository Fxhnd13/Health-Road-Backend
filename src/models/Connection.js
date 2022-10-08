const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME, //Database
    process.env.DB_USER, //Username
    process.env.DB_PASSWORD, //Password,
    {
        host: process.env.DB_HOST, //Host
        dialect: 'postgres',
        dialectOptions: {
            ssl:{
                require: true,
                rejectUnauthorized: false
            }
        },
        port: process.env.DB_PORT,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    }
);

module.exports = { sequelize }