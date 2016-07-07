angular.module("app",['ui.router']);

angular.module("app").config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
            url: '/',
            templateUrl: './routes/home.html',
            controller:'homeCtrl'
        })

    .state('login', {
            url: '/login',
            templateUrl: './routes/login.html'
        })

    .state('patients', {
            url: '/patients',
            templateUrl: './routes/patients.html'
        })

    .state('singlepatient', {
            url: '/singlepatient',
            templateUrl: './routes/singlepatient.html'
        })

    .state('user', {
            url: '/user',
            templateUrl: './routes/user.html'
        })

  });
