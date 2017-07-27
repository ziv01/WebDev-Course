// Code goes here

var app = angular.module("myapp", []);
app.controller("ListController", ['$scope', '$http', function ($scope, $http) {
        $http.get("test.json")
                .then(function (response) { $scope.personalDetails = response.data; });


        /*
        $scope.personalDetails = [
                {
                        'fname': 'Sateesh',
                        'lname': 'M',
                        'email': 'sateeshm@gmail.com'
                },
                {
                        'fname': 'Santhosh',
                        'lname': 'L',
                        'email': 'santhoshl@gmail.com'
                },
                {
                        'fname': 'Ramesh',
                        'lname': 'R',
                        'email': 'rameshr@gmail.com'
                }];
*/
        /*       app.controller('ListController', function ($scope, $http) {
                       $http.get("customer.json")
                               .then(function (response) { $scope.personalDetails = response.data; });
               }); */
        $scope.addNew = function (personalDetails) {
                $scope.personalDetails.push({
                        'fname': personalDetails.fname,
                        'lname': personalDetails.lname,
                        'email': personalDetails.email,
                });
                $scope.PD = {};
        };
        $scope.remove = function () {
                var newDataList = [];
                $scope.selectedAll = false;
                angular.forEach($scope.personalDetails, function (selected) {
                        if (!selected.selected) {
                                newDataList.push(selected);
                        }
                });
                $scope.personalDetails = newDataList;
        };
        $scope.checkAll = function () {
                if (!$scope.selectedAll) {
                        $scope.selectedAll = true;
                } else {
                        $scope.selectedAll = false;
                }
                angular.forEach($scope.personalDetails, function (personalDetails) {
                        personalDetails.selected = $scope.selectedAll;
                });
        };
}]);