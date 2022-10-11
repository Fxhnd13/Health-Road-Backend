const sequelize = require('../Connection');
const { DataTypes } = require('sequelize');

const MedicalCenter = sequelize.define('medical_center', {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING(length = 30),
        unique: true
    },
    direction: {
        allowNull: true,
        type: DataTypes.JSON
    },
    profile_pic: {
        allowNull: true,
        type: DataTypes.STRING(length = 50)
    },
    description: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    //payment_type
    //email
    //user
    //director_name
    //status -> is_active
    is_active: {
        allowNull: false,
        defaultValue: true,
        type: DataTypes.BOOLEAN
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = MedicalCenter;