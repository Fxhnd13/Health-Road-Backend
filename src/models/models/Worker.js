const sequelize = require('../Connection');
const { DataTypes } = require('sequelize');

const Worker = sequelize.define('worker', {
    id_user: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    id_hospital: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    id_user_type: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Worker 