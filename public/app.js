'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.setupParty',
  'myApp.startTurn',
  'myApp.selectRoom',
  'myApp.selectTile',
  'myApp.addPlayer',
  'myApp.players',
  'myApp.playerInfo',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/setupParty'});
}]);
