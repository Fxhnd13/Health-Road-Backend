const { sequelize } = require('./Connection');
const { DataTypes } = require('sequelize');
const { AmbulanceDriver } = require('./AmbulanceDriver');
const { Hospital } = require('./Hospital');
const { Favorite } = require('./Favorite');
const { CreditCard } = require('./CreditCard');

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

module.exports = { User }