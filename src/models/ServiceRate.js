const { sequelize } = require('./Connection');
const { DataTypes } = require('sequelize');

let ServiceRate = sequelize.define('service_rate', {
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = { ServiceRate }