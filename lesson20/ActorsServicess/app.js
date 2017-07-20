// Code goes here

var movieApp = angular.module('movieApp', []);

movieApp.controller('ActorCtrl', function($scope, $http) {
  
  function Actor(plainObject) {
    this.firstName = plainObject.firstName;
    this.lastName = plainObject.lastName;
    this.image = plainObject.image;
    this.isSelected = false;
    this.fullName = function() { return this.firstName + " " + this.lastName };
  }

  $http.get("actors.json").then(function(response){
    $scope.actors = [];
    for (var i = 0; i < response.data.length; i++) {
      $scope.actors.push(new Actor(response.data[i]));
    }
  });
  
  $scope.imgClick = function(actor) {
    // loop through actors to reset them to false
    for(var i=0;i<$scope.actors.length;i++) {
      $scope.actors[i].isSelected = false;
    }
    
    actor.isSelected = true;
  };
});

movieApp.controller('TopTenCtrl', function($scope, $http) {
  
  $http.get("movies.json").then(function(response){
    $scope.movies = response.data;
  });

  
}).directive("movie", function() {
  return {
    templateUrl: function(elem, attr) {
      return "movie.html"}
  };
});

/* creating an angular service */
myNbaApp.factory('converter', function() {
  var timeUnits = ["HR", "MIN", "SECONDS"];
  var timeFrames = {
    HR: 1,
    MIN: 60,
    SECONDS: 3600
  }
  
  var convertTime = function(inTime) {
    return (inTime / 60) + "HR" + Math.round((inTime % 60) / 60);
  }
  
  return {
    length: convertTime
  }
})