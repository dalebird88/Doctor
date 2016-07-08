angular.module("app")
.service('homeService', function($http){
  var self = this;
  this.createUser = function(user){
    return $http.post('/users', user).then(function(res){
      console.log(res);
      self.user =res.data;
      return res.data;
    })
  }
  this.userLogin = function(login){
    return $http.post('/login', login).then(function(res){
      self.user =res.data;
      return res.data;
    })
  }
})
