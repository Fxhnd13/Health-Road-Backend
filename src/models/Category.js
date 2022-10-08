import {DataTypes} from "sequelize";
import {sequelize} from "./Connection";
import Service from "./Service";

let Category = sequelize.define('category', {
    name: {
        type: DataTypes.STRING(length = 30),
        allowNull: false,
        primaryKey: true,
    },
    description: {
        type: DataTypes.STRING(length = 50),
        allowNull: false,
    }
}, {
    timestamps,
    freezeTableName: true
});

Category.hasMany(Service, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'category_name',
        allowNull: true
    }
});

module.exports = { Category }