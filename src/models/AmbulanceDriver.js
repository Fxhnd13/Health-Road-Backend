import {DataTypes} from "sequelize";
import {sequelize} from "./Connection";

let AmbulanceDriver = sequelize.define('ambulance_driver', {
    direction: {
        type: DataTypes.JSON
    },
    user: {
        type: DataTypes.STRING(length = 40),
        allowNull: false,
        primaryKey: true,
    },
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = { AmbulanceDriver }