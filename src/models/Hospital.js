import {sequelize} from "./Connection";
import {DataTypes} from "sequelize";
import Service from "./Service";
import ServiceRate from "./ServiceRate";
import AmbulanceDriver from "./AmbulanceDriver";

let Hospital = sequelize.define('hospital',{
    user: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    direction: {
        type: DataTypes.JSON,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    payment_type: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue:0
    },
    director_name: {
        type: DataTypes.STRING(length = 50),
        allowNull: true,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    photos: {
        type:DataTypes.JSON
    }
},{
    timestamps: false,
    freezeTableName: true
});

Hospital.hasMany(Service,{
    onDelete: 'CASCADE',
    foreignKey:{
        name: 'hospital_user',
        primaryKey: true
    }
});

Hospital.hasMany(ServiceRate, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'hospital',
        allowNull: false
    }
});

Hospital.hasMany(AmbulanceDriver, {
    onDelete: 'CASCADE',
    foreignKey: {
        allowNull: true,
        defaultValue: null,
        name: 'hospital_user'
    }
});

module.exports = { Hospital }