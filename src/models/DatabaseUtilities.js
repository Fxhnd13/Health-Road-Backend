const Hospital = require("./Hospital");
const Category = require("./Category");
const Service = require("./Service");
const User = require('./User');
const AmbulanceDriver = require("./AmbulanceDriver");
const Discount = require("./Discount");
const ServiceRate = require("./ServiceRate");
const Request = require("./Request");

const loadDummyData = function(){

}

const resetDatabase = async function(){
    await Hospital.sync({ force: true });
    await Category.sync({ force: true });
    await Service.sync({ force: true });
    await User.sync({ force: true });
    await AmbulanceDriver.sync({ force: true });
    await Discount.sync({ force: true });
    await ServiceRate.sync({ alter: true });
    await Request.sync({ alter: true });
}

module.exports = { loadDummyData, resetDatabase }