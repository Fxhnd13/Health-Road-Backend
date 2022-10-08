import {sequelize} from "./Connection";
import {DataTypes} from "sequelize";
import AmbulanceDriver from "./AmbulanceDriver";
import Hospital from "./Hospital";
import Favorite from "./Favorite";
import CreditCard from "./CreditCard";

let User = sequelize.define('user', {
    code:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    user: {
        type: DataTypes.STRING(length = 40),
        allowNull: false,
        primaryKey: true,
    },
    password: {
        type: DataTypes.STRING(length = 50),
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(length = 40),
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING(length = 40),
        allowNull: true,
    },
    profile_pic: {
        type: DataTypes.STRING(length = 50),
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING(length = 50),
        allowNull: true,
    },
    celphone: {
        type: DataTypes.INTEGER,
        allowNull:true
    },
    rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status:{
        type:DataTypes.BOOLEAN,
        defaultValue:true,
    }
}, {
    freezeTableName: true,
    timestamps: false
});

User.hasMany(AmbulanceDriver, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'user',
        primaryKey: true,
        allowNull: false
    }
});

User.hasMany(Hospital, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'user',
        primaryKey: true,
        allowNull: false
    }
});

User.hasMany(Favorite, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'user',
        allowNull: false
    }
});

User.hasOne(CreditCard, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'user'
    }
});

Module.exports = { User }