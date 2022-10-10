const { sequelize } = require('./Connection');
const { DataTypes } = require('sequelize');
const { Worker } = require('./Worker');
const { CreditCard } = require("./CreditCard");

let User = sequelize.define('user',{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    dpi: {
        type: DataTypes.STRING(length = 13),
        unique: true,
        allowNull: false
    },
    user: {
        type: DataTypes.STRING(length = 30),
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(length = 300),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(length = 60),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(length = 60),
        allowNull: false
    },
    id_user_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    profile_pic: {
        type: DataTypes.STRING(length = 50),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(length = 50),
        allowNull: true,
    },
    telephone: {
        type: DataTypes.INTEGER,
        allowNull:true
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }
},{
    timestamps: false,
    freezeTableName: true
});

//User.hasMany(Worker, {foreignKey: 'id_user'});
//User.hasMany(CreditCard, {foreignKey: 'id_credit_card'});

module.exports = { User }