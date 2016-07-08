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
            url: '/singlepatient',
            templateUrl: './routes/singlepatient.html',
            controller: 'spCtrl'
        })

    .state('user', {
            url: '/user',
            templateUrl: './routes/user.html',
            controller:'userCtrl'
        })

  });
