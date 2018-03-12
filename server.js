const express = require('express');
const bodyParser = require('body-parser');

// create express app
var app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url);

mongoose.connection.once('open', function(){
  console.log('successfully connected to the database');
});

app.get('/', function(req, res){
  res.json({"message": "Welcome to the lhama land!"})
});

// Require Notes routes
require('./app/routes/note.routes.js')(app);

app.listen(3000, function(){
  console.log("Server started on port 3000")
});