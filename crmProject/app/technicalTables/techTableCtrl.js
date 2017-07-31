app.controller("TechTableCtrl", function ($scope, $http) {
        $http.get("app/technicalTables/techDetails.json")
                .then(function (response) { $scope.techDetails = response.data; });


        $scope.addNew = function () {

                $scope.techDetails.push({
                        'techName': "",
                        'callID': "",
                        'description': "",
                        'company': "",
                        'address': "",
                        'email': "",
                        'phone': "",
                        'mobile': ""
                });
        };
        $scope.remove = function () {
                var newDataList = [];
                //$scope.selectedAll = false;
                if ($scope.selectedAllTech !== true || $scope.selectedAllTech === null) {
                        angular.forEach($scope.techDetails, function (checked) {
                                console.log(!$scope.selectedAll);
                                if (!checked.checked) {
                                        newDataList.push(checked);
                                }
                        });
                        var origListLength = $scope.techDetails.length;
                        var newListLength = newDataList.length;
                        if (newListLength < origListLength) {
                                if (confirm("אתה עומד למחוק רשומה!")) {
                                        $scope.techDetails = newDataList;
                                }
                        }
                } else {
                        var newDataList = [];
                        console.log(!$scope.selectedAll);
                        if (confirm("אתה עומד למחוק את כל הרשומות!!")) {
                                $scope.techDetails = newDataList;
                        }
                }
        };

        $scope.sortType = 'name'; // set the default sort type
        $scope.sortReverse = false; // set the default sort order
        $scope.filterArg = ""; // Set default value for search string
        $scope.isLoggedIn = true; //if not on main page hide login option.
});