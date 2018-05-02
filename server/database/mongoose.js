/**
 * Created by shank on 29/04/2018.
 */
const mongoose = require("mongoose");

//setting the global promise library to be used by mongoose
mongoose.Promise = global.Promise;

//Connect to the MongoDb NodeApiDB at localhost
var connectToDatabase = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect('mongodb://localhost:27017/NodeApiDB')
            .then(() => { resolve("Successfully connected to DB") })
            .catch((err) => reject(err));
    });
};

//Disconnect from the MongoDb NodeApiDB at localhost
var disconnectFromDatabase = () => {
    return new Promise((resolve, reject) => {
        mongoose.disconnect()
            .then(() => { resolve("Successfully disconnected from DB") })
            .catch((err) => reject(err));
    });
};

module.exports = {
    connectToDatabase,
    disconnectFromDatabase
};
