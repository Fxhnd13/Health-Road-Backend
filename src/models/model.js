const Category = require('./models/Category');
const Worker = require('./models/Worker');
const UserType = require('./models/UserType');
const MedicalCenter = require('./models/Hospital');
const User = require('./models/User');
const CreditCard = require('./models/CreditCard');

CreditCard.belongsTo(User, {foreignKey: 'id_user'});

MedicalCenter.hasMany(Worker,{foreignKey: 'id_hospital'});

User.hasMany(Worker, {foreignKey: 'id_user'});
User.hasMany(CreditCard, {foreignKey: 'id_credit_card'});

UserType.hasMany(Worker, {foreignKey: 'id_user_type'});

Worker.belongsTo(MedicalCenter, {foreignKey: 'id_hospital'});
Worker.belongsTo(UserType, {foreignKey: 'id_user_type'});
Worker.belongsTo(User, {foreignKey: 'id_user'});