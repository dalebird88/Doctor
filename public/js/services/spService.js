angular.module("app")
.service('spService', function($http){
  this.getPatient = function(patientId){
    return $http.get('/sp/' + patientId).then(function(res){
      return res;
    })
  }
  this.updatePatient = function(patient){
    console.log(patient);
    return $http.put('/spupdate/'+ patient._id, patient).then(function(res){
      return res;
    })
  }
})
