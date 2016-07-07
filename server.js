
var axios = require('axios');
var bodyparser = require('body-parser');
var cors = require('cors');
var express = require('express');
var express_session = require('express-session');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/doctor');
var User = require('./userschema.js');
var Patient = require('./patientSchema.js');



var app = express();
app.use(bodyparser.json());

app.use(express.static('public'));

var port = 3000;


//Creating a new user

app.post('/users', function(req, res, next){
  User.create(req.body, function(err, user){

    if (err){
      return res.send(err);
    }
    return res.send(user);
  })
})

// get all users
app.get('/users', function(req, res, next){
  User.find(req.body, function(err, user){

    if (err){
      return res.send(err);
    }
    return res.send(user);
  })
})

// login
app.post('/users', function(req, res, next){
  User.findone(req.body, function(err, user){

    if (err){
      return res.send(err);
    }
    return res.send(user);
  })
})



// finding patinents linked to doctor
app.get('/patients', function(req, res, next){

    var ref = []
    for (var i = 0; i < patients.length; i++){
      if (users.username === patients.doctor[i]){
          ref.push(patients[i]);
      }
    }
    console.log(ref);
    res.send(ref);
})


app.listen(port, function(){
  console.log('Listening on port ', port);
})
