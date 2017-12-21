// File: chapter10/routing-example/app/scripts/app.js
angular.module('mountainApp', ['ngRoute'])
  .config(function($routeProvider) {

    $routeProvider.when('/', {
      templateUrl: 'views/mountain_list.html',
      controller: 'MountainListCtrl as mountainListCtrl'
    })
    
    .when('/mountain/:code', {
      templateUrl: 'views/mountain_details.html',
      controller:'MountainDetailsCtrl as mountainDetailsCtrl',
      // resolve: {
      //   auth: ['$q', '$location',
      //     function($q, $location, UserService) {
      //        return UserService.session().then(
      //          function(success) {},
      //          function(err) {
      //             $location.path('/login');
      //             $location.replace();
      //             return $q.reject(err);
      //        });
      //   }]
      // }
    });
    $routeProvider.otherwise({
      redirectTo: '/'
    });
  });
