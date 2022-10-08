import {DataTypes} from "sequelize";
import {sequelize} from "./Connection";

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