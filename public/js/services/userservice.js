angular.module("app")
.service('userService', function($http){
  this.getUser = function(){
    return $http.get('/users').then(function(res){
      return res.users;
    })
  }

  this.getPatients = function(){
    return $http.get('/mypatients').then(function(res){
      return res;
    })
  }
})
