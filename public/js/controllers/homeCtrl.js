angular.module("app")
.controller("homeCtrl", function($scope, $state, homeService){
  $scope.createUser = function(user){
    homeService.createUser(user).then(function(res){
      $scope.users = res;
      $state.go('user')
    })
  }
  $scope.userLogin = function(login){
    homeService.userLogin(login).then(function(res){
      $scope.users = res;
      $state.go('user')
    })
  }
});
