var angularApp = angular.module('FootballApp', ['ngResource','ngRoute']);

angularApp.config(function ($routeProvider,$httpProvider){
   $httpProvider.defaults.headers.get = { 'X-Auth-Token' : '81c67bb50c22475988d142f17b0b0ddc'  }
  $routeProvider
  .when ('/',
  {
    templateUrl: 'pages/league.html',
    controller: 'FootBallController',
    controllerAs: 'fb'
  })

});

angularApp.controller("FootBallController",['$resource','$filter','$routeParams','$http',
function($resource,$filter,$routeParams,$http){
   var vm=this;
   var footballResource = $resource('http://api.football-data.org/v1/soccerseasons');
   vm.football_data = footballResource.query();
   console.log(vm.football_data);
}]);
