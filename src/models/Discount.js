import { DataTypes } from "sequelize";
import Service from "./Service";

let Discount = sequelize.define('discount', {
    percentage:{
        type: DataTypes.DOUBLE,
        defaultValue:0,
        allowNull: false,
    },
    date_initial:{
        type:DataTypes.DATE,
        defaultValue: Date.now(),
    },
    date_end:{
        type:DataTypes.DATE,
        defaultValue: Date.now(),
    },
}, {
    freezeTableName: true,
    timestamps: false
});

Discount.hasMany(Service, {
    onDelete: 'CASCADE',
    foreignKey: {
        allowNull: true
    }
});

module.exports = { Discount }