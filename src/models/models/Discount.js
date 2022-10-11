const  sequelize  = require('../Connection');
const { DataTypes } = require('sequelize');

const Discount = sequelize.define('discount',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    percetange:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date_init:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    date_end:{
        type: DataTypes.DATEONLY,
        allowNull: true
    }
},{
    timestamps: false,
    freezeTableName: true
});

module.exports =  Discount ;