var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientSchema = new Schema({
  name: String,
  email:String,
  doctorid: {type:Schema.Types.ObjectId, ref:'User'},
  history:String,
  notes: String
});

module.exports = mongoose.model('Patient', patientSchema)
