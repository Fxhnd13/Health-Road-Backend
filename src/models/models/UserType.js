const  sequelize  = require('../Connection');
const { DataTypes} = require('sequelize');

const UserType = sequelize.define('user_type',{
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING(length = 30),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(length = 120),
        allowNull: false
    }
},{
    timestamps: false,
    freezeTableName: true
});

module.exports =  UserType 