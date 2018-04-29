const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create a schema for the user document
const userschema = new Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    }
});

module.exports = { userschema };