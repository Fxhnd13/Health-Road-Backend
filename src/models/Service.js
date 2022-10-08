import {sequelize} from "./Connection";
import {DataTypes} from "sequelize";
import ServiceRate from "./ServiceRate";

let Service = sequelize.define('service', {
    name: {
        type: DataTypes.STRING(length = 30),
        allowNull: false,
        primaryKey: true,
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull:true
    },
    schedule: {
        type: DataTypes.JSON,
        defaultValue: {
            "Monday":"0",
            "Tuesday":"0",
            "Thursday":"0",
            "Wednesday":"0",
            "Friday":"0",
            "Sunday":"0",
            "Saturday":"0"
        }
    }
}, {
    timestamps: false,
    freezeTableName: true
});

Service.hasMany(ServiceRate, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'service',
        allowNull: false
    }
});

module.exports = { Service }