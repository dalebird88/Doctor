
var axios = require('axios');
var bodyparser = require('body-parser');
var cors = require('cors');
var express = require('express');
var expressSession = require('express-session');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/doctor');
var User = require('./userschema.js');
var Patient = require('./patientSchema.js');



var app = express();
app.use(bodyparser.json());

app.use(express.static('public'));
app.use(expressSession({
  secret: "secret tunnel",
  resave: false,
  saveUninitialized: true
}));
var port = 3000;


//Creating a new user

app.post('/users', function(req, res, next){
  User.create(req.body, function(err, user){
    if (err){
      return res.send(err);
    }
    req.session.user=user;
    return res.send(user);
  })

})

// get all users
app.get('/allusers', function(req, res, next){
  User.find(req.body, function(err, user){

    if (err){
      return res.send(err);
    }
    return res.send(user);
  })
})

// login
app.post('/login', function(req, res, next){
  User.findOne({username: req.body.username}, function(err, user){
    if (!user || err) {
      return res.status(500).send(err);
    }
    else if(user.password === req.body.password){
        req.session.user = user;
        console.log(req.session.user);
        return res.send(user);
    }
    else{
      return res.status(500).send(err);
    }
  })
})

//create new patient
app.post('/patient', function(req, res, next){
  req.body.doctorid = req.session.user._id;
  Patient.create(req.body, function(err, patient){

    if(err){
      return res.send(err);
    }
    return res.send(patient);
  })
})


// finding patinents linked to doctor
app.get('/mypatients', function(req, res, next){
  Patient.find({doctorid:req.session.user._id}, function(err, patients){
    if(err){
      return res.send(err);
    }

    res.send(patients);
  })
})
//singlepatient
app.get('/sp/:patientId',function(req, res, next){
  Patient.findById(req.params.patientId, function(err, patient){
    if (err){
      return res.send(err);
    }
    else{
      return res.send(patient);
    }

  })

})

//update patient info

app.put('/spupdate/:patientId', function(req, res, next){
  console.log(req.body);
  Patient.findByIdAndUpdate(req.params.patientId, req.body, function(err, result){
    console.log(err, result);
    if (err){
      return res.send(err);
    }
    else{
      res.send(result);
    }
  })
})

app.listen(port, function(){
  console.log('Listening on port ', port);
})
