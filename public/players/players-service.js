'use strict';

angular.module('myApp.players', [])

.service('playersService', [ '$http', function($http) {
  var players = [];
  var charClasses = [];
  var selectedCharClasses = [];

  var charClassesLoadedPromise = $http({
    method: 'GET',
    url: '/classes'
  }).then(function successCallback(response) {
    console.log(response.data.classes);
    charClasses = response.data.classes;
  }, function errorCallback(response) {
    console.log("Something went wrong fetching classes from server");
  });

  return {
    getPlayers: function() { return players },

    addPlayer: function(name, charClass) {
      players.push({
        name: name,
        charClass: charClass
      })
    },

    getCharClasses: function() { return charClasses },

    getSelectedCharClasses: function() { return selectedCharClasses },

    selectCharClasses: function(charClass) {
      selectedCharClasses.push[charClass];
    },

    getCharClassesLoadedPromise: function() { return charClassesLoadedPromise }
  }
}]);
