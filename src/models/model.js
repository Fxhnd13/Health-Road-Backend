const Worker = require('./models/Worker');
const UserType = require('./models/UserType');
const MedicalCenter = require('./models/Hospital');
const User = require('./models/User');
const Favorites = require('./models/Favorites');
const CreditCard = require('./models/CreditCard');
const Category = require('./models/Category');
const Discount = require('./models/Discount');
const Service = require('./models/Service');

//User 1:M CreditCard
User.hasMany(CreditCard, {foreignKey: 'id_credit_card'});
CreditCard.belongsTo(User, {foreignKey: 'id_user'});

//MedicalCenter 1:M Worker 
MedicalCenter.hasMany(Worker,{foreignKey: 'id_hospital'});
Worker.belongsTo(MedicalCenter, {foreignKey: 'id_hospital'});

//User 1:M Worker
User.hasMany(Worker, {foreignKey: 'id_user'});
Worker.belongsTo(User, {foreignKey: 'id_user'});

//UserType 1:M Worker
UserType.hasMany(Worker, {foreignKey: 'id_user_type'});
Worker.belongsTo(UserType, {foreignKey: 'id_user_type'});

//MedocalService 1:M Service
MedicalCenter.hasMany(Service, {foreignKey: 'id_hospital'});
Service.belongsTo(MedicalCenter, {foreignKey: 'id_hospital'});

//Discount 1:M Service
Discount.hasMany(Service, {foreignKey: 'id_discount'});
Service.belongsTo(Discount, {foreignKey: 'id_discount'});

//Category 1:M Service
Category.hasMany(Service, {foreignKey: 'id_category'});
Service.belongsTo(Category, {foreignKey: 'id_category'});

//User M:N Service
User.hasMany(Favorites, {foreignKey: 'id_user'});
Service.hasMany(Favorites, {foreignKey: 'id_service'});

Favorites.belongsTo(User, {foreignKey: 'id_user'});
Favorites.belongsTo(Service, {foreignKey: 'id_service'});