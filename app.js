var angularApp = angular.module('FootballApp', ['ngResource','ngRoute']);

angularApp.config(function ($routeProvider){
  $routeProvider
  .when ('/',
  {
    templateUrl: 'pages/league.html',
    controller: 'FootBallController',
    controllerAs: 'fb'
  })

});

angularApp.controller("FootBallController",['$resource','$filter','$routeParams',
function($resource,$filter,$routeParams){
   var vm=this;
   var id = $routeParams.uniqId;
   var FootballResource = $resource('http://api.football-data.org/v1/soccerseasons',{ 'X-Auth-Token': '81c67bb50c22475988d142f17b0b0ddc' });
   vm.FootballResponse = FootballResource.get();
   console.log('FootballResponse');

}]);
