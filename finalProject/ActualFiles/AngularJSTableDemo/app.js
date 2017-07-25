var app;

var app = angular.module("crmApp", []);
app.controller('TableCtrl', function($scope, $http) {
    $http.get("http://localhost/test/customers.json")
    .then(function (response) {$scope.names = response.data.records;});
});
