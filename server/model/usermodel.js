const mongoose = require('mongoose');
const { userschema } = require ('../schema/userschema');

//Create a model
const usermodel = mongoose.model('tblUsers',userschema);

module.exports = { usermodel };