// Code goes here

var myNbaApp = angular.module('nbaApp', []);



myNbaApp.controller('PlayerListCtrl', function($scope){
  function Player(name, team, url) {
    this.name = name;
    this.team = team;
    this.url = url;
  }
  
  $scope.players = [
      new Player("Kevin Durant", "Golden State Warriors", "http://www.nba.com/players/kevin/durant/201142"),
      new Player("Kobe Bryant", "Lod Angeles Lakers", "https://en.wikipedia.org/wiki/Kobe_Bryant"),
      new Player("Lebron James", "Cleavland Cavaliers", "https://en.wikipedia.org/wiki/LeBron_James")
    ]

  
});