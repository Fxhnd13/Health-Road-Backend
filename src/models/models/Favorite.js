const  sequelize  = require('../Connection');
const { DataTypes } = require('sequelize');

const Favorite = sequelize.define('favorite',{
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

module.exports =  Favorite ;