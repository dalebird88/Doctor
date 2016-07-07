var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientSchema = new Schema({
  name: String,
  email:String,
  doctor: String,
  history:String,
  notes: String
});

module.exports = mongoose.model('Patient', patientSchema)
