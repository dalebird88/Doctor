angular.module("app",['ui.router']);

angular.module("app").config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
            url: '/',
            templateUrl: './routes/home.html'
        })

  });
