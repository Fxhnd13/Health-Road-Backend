import { DataTypes} from "sequelize";
import {sequelize} from "./Connection";

let CreditCard = sequelize.define('credit_card', {
    card_number:{
        type: DataTypes.CHAR(length =17),
        allowNull: true,
        primaryKey: true,
    },
    expiration:{
        allowNull: false,
        type: DataTypes.DATEONLY
    },
    cvv:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    holder:{
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: ''
    }
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = { CreditCard }