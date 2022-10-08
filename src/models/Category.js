const { sequelize } = require('./Connection');
const { DataTypes } = require('sequelize');
const { Service } = require('./Service');

let Category = sequelize.define('category', {
    name: {
        type: DataTypes.STRING(length = 30),
        allowNull: false,
        primaryKey: true,
    },
    description: {
        type: DataTypes.STRING(length = 50),
        allowNull: false,
    }
}, {
    timestamps: false,
    freezeTableName: true
});

Category.hasMany(Service, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'category_name',
        allowNull: true
    }
});

module.exports = { Category }