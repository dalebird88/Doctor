angular.module("app")
.service('userService', function($http){
  this.getUser = function(){
    return $http.get('/users').then(function(res){
      console.log(res);
      return res.users;
    })
  }
})
