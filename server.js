
var axios = require('axios');
var bodyparser = require('body-parser');
var cors = require('cors');
var express = require('express');
var express_session = require('express-session');
var mongoose = require('mongoose');

var users = [
  {username:'test' ,password:'test', name:'test', type:'test', Hospital:'test' ,City:'test' , State:'test' }
]

var patients = [
  {name:'test', email:'test', doctor:'test', history:'test', notes:'test'}
]

var app = express();
app.use(bodyparser.json());

app.use(express.static('public'));

var port = 3000;

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
