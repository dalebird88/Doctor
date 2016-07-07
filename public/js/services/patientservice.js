angular.module('app').service('patientservice', function(){
  this.getpatients = function(){
    $http({
        method:"GET",
        url:'localhost:3000/patients',

    })).then(function(response){
     console.log(response);
     deferred.resolve(response.data.results);
   })
   return deferred.promise;
  }
});
