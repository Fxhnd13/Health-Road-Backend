const sequelize = require("../models/Connection");
const fs = require("fs");
const path = require("path");
const db = {}

fs
    .readdirSync(__dirname+'/models')
    .filter((file) => {
            return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
        })
    .forEach((file) => {
            const model = require(path.join(__dirname, 'models/'+file.substring(0, file.length-3)));
            db[model.name] = model;
    });

//User 1:M CreditCard
db['user'].hasMany(db['credit_card'], {as: 'credit_cards', foreignKey: 'id_user'});
db['credit_card'].belongsTo(db['user'], {foreignKey: 'id_user'});

//MedicalCenter 1:M Worker 
db['medical_center'].hasMany(db['worker'],{foreignKey: 'id_hospital'});
db['worker'].belongsTo(db['medical_center'], {foreignKey: 'id_hospital'});

//User 1:M Worker
db['user'].hasMany(db['worker'], {foreignKey: 'id_user'});
db['worker'].belongsTo(db['user'], {foreignKey: 'id_user'});

//UserType 1:M Worker
db['user_type'].hasMany(db['worker'], {foreignKey: 'id_user_type'});
db['worker'].belongsTo(db['user_type'], {foreignKey: 'id_user_type'});

//MedocalService 1:M Service
db['medical_center'].hasMany(db['service'], {foreignKey: 'id_hospital'});
db['service'].belongsTo(db['medical_center'], {foreignKey: 'id_hospital'});

//Discount 1:M Service
db['discount'].hasMany(db['service'], {foreignKey: 'id_discount'});
db['service'].belongsTo(db['discount'], {foreignKey: 'id_discount'});

//Category 1:M Service
db['category'].hasMany(db['service'], {foreignKey: 'id_category'});
db['service'].belongsTo(db['category'], {foreignKey: 'id_category'});

//User M:N Service
db['user'].hasMany(db['favorite'], {foreignKey: 'id_user'});
db['service'].hasMany(db['favorite'], {foreignKey: 'id_service'});

db['favorite'].belongsTo(db['user'], {foreignKey: 'id_user'});
db['favorite'].belongsTo(db['service'], {foreignKey: 'id_service'});

db.sequelize = sequelize;

module.exports = db;