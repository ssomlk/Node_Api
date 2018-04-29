const mongoose = require('mongoose');
const { activityschema } = require ('../schema/activityschema');

//Create a model
const activitymodel = mongoose.model('tblActivity',activityschema);

module.exports = { activitymodel };