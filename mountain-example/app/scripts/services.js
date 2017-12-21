// File: chapter10/routing-example/app/scripts/services.js
angular.module('mountainApp')
  .factory('MountainService', ['$http',
    function($http) {
      return {
        getTeams: function() {
          return $http.get('/api/mountain');
        },

        getTeamDetails: function(code) {
          return $http.get('/api/mountain/' + code);
        }
      }
  }]);
