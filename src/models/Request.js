const { DataTypes } = require('sequelize');
const { sequelize } = require('./Connection');

let Request = sequelize.define('solicitud', {
    name:{
        type: DataTypes.STRING(length = 50),
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING(length = 30),
        allowNull: false,
    },
    hospital_register:{
        type: DataTypes.STRING(length = 10),
        allowNull: false,
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    readed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
},{
    freezeTableName: true,
    timestamps: false
});

module.exports = { Request }