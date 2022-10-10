const { sequelize } = require('./Connection');
const { DataTypes} = require('sequelize');
const { MedicalCenter } = require("./Hospital");
const { User } = require("./User");
const { UserType } = require("./UserType");

let Worker = sequelize.define('worker',{
    id_user: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    id_hospital: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    id_user_type: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER
    }
},{
    timestamps: false,
    freezeTableName: true
});

//Worker.belongsTo(MedicalCenter, {foreignKey: 'id_hospital'});
//Worker.belongsTo(UserType, {foreignKey: 'id_user_type'});
//Worker.belongsTo(User, {foreignKey: 'id_user'});

module.exports = { Worker }