angular.module("app")
.controller("apCtrl", function($scope, apService, $state){
  $scope.createPatient = function(newpat){
    apService.createPatient(newpat).then(function(res){
      $scope.patient = res;
      $state.go('user');
    })
  }
})
