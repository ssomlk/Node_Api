/**
 * Created by shank on 29/04/2018.
 */
const mongoose = require("mongoose");

//setting the global promise library to be used by mongoose
mongoose.Promise = global.Promise;

//Connect to the MongoDb NodeApiDB at localhost
mongoose.connect('mongodb://localhost:27017/NodeApiDB');

module.exports = { mongoose };
