var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {type:String, required:true },
  password: {type:String, required:true },
  name: {type:String, required:true },
  type:{type:String, required:true },
  hospital: {type:String, required:true },
  city: {type:String, required:true },
  state:{type:String, required:true }
})

module.exports = mongoose.model('User', userSchema);
