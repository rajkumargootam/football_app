var angularApp = angular.module('FootballApp', ['ngResource','ngRoute']);

angularApp.config(function ($routeProvider,$httpProvider){
   $httpProvider.defaults.headers.get = { 'X-Auth-Token' : '81c67bb50c22475988d142f17b0b0ddc'  }
  $routeProvider
  .when ('/',
  {
    templateUrl: 'pages/league.html',
    controller: 'FootballController',
    controllerAs: 'fb'
  })
  .when ('/leagueDetails/:uniqId',
  {
    templateUrl: 'pages/leagueDetails.html',
    controller: 'DetailsController',
    controllerAs: 'ld'
  })
  // .when ('/leaugetable/:uniqId',
  // {
  //   templateUrl: 'pages/leaguetable.html',
  //   controller: 'LeagueTableController',
  //   controllerAs: 'fc'
  // })

});

angularApp.controller("FootballController",['$resource','$filter','$routeParams','$http',
function($resource,$filter,$routeParams,$http){
   var vm=this;
   var footballResource = $resource('http://api.football-data.org/v1/soccerseasons');
   vm.football_data = footballResource.query();
   console.log(vm.football_data);
}]);


angularApp.controller("DetailsController",['$resource','$filter','$routeParams','$http',
function($resource,$filter,$routeParams,$http){
   var vm = this;
   var id = $routeParams.uniqId;
   var leagueDetailsResource = $resource('http://api.football-data.org/v1/soccerseasons/'+ id +'/teams');
   vm.leagueDetails_data = leagueDetailsResource.get();
   console.log(vm.leagueDetails_data);

   var id = $routeParams.uniqId;
   var leagueTableResource = $resource('http://api.football-data.org/v1/soccerseasons/'+ id +'/leagueTable');
   vm.leagueTableResponse = leagueTableResource.get();
   console.log(vm.leagueTableResponse);
}]);

// angularApp.controller("LeagueTableController",['$resource','$filter','$routeParams','$http',
// function($resource,$filter,$routeParams,$http){
//    var vm = this;
//    var id = $routeParams.uniqId;
//    var leaguetableResource = $resource('http://api.football-data.org/v1/soccerseasons/394/leagueTable');
//    vm.leaguetable_data = leaguetableResource.get();
//    console.log(vm.fixturesDetails_data);
// }]);
