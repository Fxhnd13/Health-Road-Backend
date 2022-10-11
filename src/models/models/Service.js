const  sequelize  = require('../Connection');
const { DataTypes } = require('sequelize');

const Service = sequelize.define('service',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(length = 30),
        allowNull: false,
        unique:true
    },
    description: {
        type: DataTypes.STRING(length = 150),
        allowNull: false
    },
    price:{
        type: DataTypes.DOUBLE,
        allowNull:false
    },
    schedule:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    id_category:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_hospital: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_discount:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
},{
    timestamps: false,
    freezeTableName: true
});

module.exports =  Service ;