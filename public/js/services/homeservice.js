angular.module("app")
.service('homeService', function($http){
  this.createUser = function(user){
    return $http.post('/users', user).then(function(res){
      console.log(res);
      return res.users;
    })
  }
})
