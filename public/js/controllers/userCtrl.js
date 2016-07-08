angular.module("app")
.controller("userCtrl", function($scope, userService,homeService){
  $scope.user = homeService.user;
});
