const sequelize  = require('../Connection');
const { DataTypes} = require('sequelize');

const CreditCard = sequelize.define('credit_card',{
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    expiration_month: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    expiration_year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    card_number: {
        type: DataTypes.STRING(length = 16),
        allowNull: false
    }
},{
    timestamps: false,
    freezeTableName: true
});

module.exports = CreditCard;