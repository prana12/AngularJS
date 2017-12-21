// File: chapter10/routing-example/app/scripts/controllers.js
angular.module('mountainApp')
  
  .controller('MountainListCtrl', ['MountainService',
    function(MountainService) {
      var self = this;
      self.teams = [];

      MountainService.getTeams().then(function(resp) {
        self.teams = resp.data;
      });
  }])


  .controller('MountainDetailsCtrl',
    ['$location', '$routeParams', 'MountainService',
    function($location, $routeParams, MountainService) {
      var self = this;
      self.mountain = {};
      MountainService.getTeamDetails($routeParams.code)
          .then(function(resp){
        self.mountain = resp.data;
      }, function(error){
        $location.path('/');
      });
    }]);
