import { DataTypes} from "sequelize";
import {sequelize} from "./Connection";

let Favorite = sequelize.define('favorite', {
    user: {
        type: DataTypes.STRING(length = 40),
        allowNull: false,
    },
    service: {
        type: DataTypes.STRING(length = 30),
        allowNull: false,
    },
    hospital: {
        type: DataTypes.STRING(length = 30),
        allowNull: false,
    },
    status:{
        type: DataTypes.BOOLEAN,
        defaultValue:true
    }
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = { Favorite }