angular.module("app")
.controller("userCtrl", function($scope, userService,homeService, $state){
  $scope.user = homeService.user;

  $scope.mypatients = userService.getPatients().then(function(response){
    console.log(response);
    $scope.thesePatients = response.data;
  })

  $scope.viewPatient = function(patientId){
    $state.go('singlepatient', {patientId: patientId});
  }
});
