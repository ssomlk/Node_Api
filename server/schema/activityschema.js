const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create a schema for the document
const activityschema = new Schema({
    text:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }
});

module.exports = { activityschema };