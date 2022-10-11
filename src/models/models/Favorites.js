const  sequelize  = require('../Connection');
const { DataTypes } = require('sequelize');

const Favorites = sequelize.define('favorites',{
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false
    },
    id_service: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false
    },
},{
    timestamps: false,
    freezeTableName: true
});

module.exports =  Favorites ;