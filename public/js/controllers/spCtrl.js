angular.module("app").
controller('spCtrl', function($scope, $state, spService, patient){
console.log(patient);
  $scope.thisPatient = patient.data;
  $scope.updatePatient = function(patient){
    console.log(patient);
    spService.updatePatient(patient).then(function(res){
        $state.go('user');
    })
  }
})
