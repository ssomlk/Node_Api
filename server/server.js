/**
 * Created by shank on 29/04/2018.
 */
var express = require('express');
var bodyParser = require('body-parser');

const PORT = process.env.port || 3000;

const { connectToDatabase, disconnectFromDatabase } = require('./database/mongoose');
const { activitymodel } = require('./model/activitymodel');
const { usermodel } = require('./model/usermodel');

var app = express();

app.use(bodyParser.json());

// app.post('/api/activity', (req, res) => {
//
//     //Create the actual activity model instance
//     var newactivity = new activitymodel({
//         text:req.body.text,
//         completed: req.body.completed
//     });
//
//     //save the activity instance data to the document-tblactivities
//     newactivity.save().then((doc) => {
//         res.status(201).send(doc);
//     }, (err) => {
//         res.status(400).send(err);
//     });
//});

var connectionOpen = async () =>{
    try{
        var result = await connectToDatabase();
        console.log(result);
    }catch(err){
        console.log(err);
    }
};

var connectionClose = async () =>{
    try{
        var result = await disconnectFromDatabase();
        console.log(result);
    }catch(err){
        console.log(err);
    }
};

connectionOpen();
connectionClose();

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`);
});

module.exports = { app };
