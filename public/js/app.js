angular.module("app",['ui.router']);

angular.module("app").config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
            url: '/',
            templateUrl: './routes/home.html',
            controller:'homeCtrl'
        })

    .state('singlepatient', {
            url: '/singlepatient/:patientId',
            templateUrl: './routes/singlepatient.html',
            controller: 'spCtrl',
            resolve:{
              patient: function($stateParams, spService){
                return spService.getPatient($stateParams.patientId)
              }
            }
        })

    .state('user', {
            url: '/user',
            templateUrl: './routes/user.html',
            controller:'userCtrl'
        })
    .state('addpatient', {
            url:'/addpatient',
            templateUrl:'./routes/addpatient.html',
            controller:'apCtrl'
        })
    .state('about',{
        url:'/about',
        templateUrl:'./routes/about.html'
    })
  });
