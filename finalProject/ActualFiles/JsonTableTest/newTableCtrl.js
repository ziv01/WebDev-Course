app.controller("TableCtrl", ['$scope', '$http', function ($scope, $http) {
        $http.get("CustomersDetails.json")
                .then(function (response) { $scope.personalDetails = response.data; });


        $scope.addNew = function () {

                $scope.personalDetails.push({
                        'fullName': "",
                        'address': "",
                        'email': ""
                });
         };
        $scope.remove = function () {
                var newDataList = [];
                var yesNo = confirm("אתה עומד למחוק רשומה!") ;
                 if (yesNo) {
                $scope.selectedAll = false;
                angular.forEach($scope.personalDetails, function (selected) {
                        if (!selected.selected) {
                                newDataList.push(selected);
                        }
                });
                
                $scope.personalDetails = newDataList;
                } 
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
        $scope.sortType = 'name'; // set the default sort type
        $scope.sortReverse = false; // set the default sort order
        $scope.filterArg = ""; // Set default value for search string
}]);