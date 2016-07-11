angular.module("app")
.service('apService', function($http){
  this.createPatient = function(newpat){
    console.log(newpat);
    return $http.post('/patient', newpat).then(function(res){
      return res.data;
    })
  }
})
