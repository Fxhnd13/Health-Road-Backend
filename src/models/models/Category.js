const  sequelize  = require('../Connection');
const { DataTypes } = require('sequelize');

const Category = sequelize.define('category',{
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING(length = 30),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(length = 150),
        allowNull: false
    }
},{
    timestamps: false,
    freezeTableName: true
});

module.exports =  Category ;