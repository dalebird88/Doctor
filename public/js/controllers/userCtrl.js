angular.module("app")
.controller("userCtrl", function($scope, userservice){
  $scope.listUsers = function(){
    homeservice.getUser().then(function(res){
      $scope.users = res;

    })
  }
});
