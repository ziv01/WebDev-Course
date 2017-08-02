crmApp.controller("TableCtrl", function ($scope, $http) {
        $http.get("app/customersTables/CustomersDetails.json")
                .then(function (response) { $scope.personalDetails = response.data; });


        $scope.addNew = function () {

                $scope.personalDetails.push({
                        'fullName': "",
                        'address': "",
                        'email': "",
                        'phone': "",
                        'mobile': "",
                        'company': "",
                        'companyID': ""
                });
        };
 
        $scope.remove = function () {
                var newDataList = [];
                //$scope.selectedAll = false;
                if ($scope.selectedAllCustomers !== true || $scope.selectedAllCustomers === null) {
                        angular.forEach($scope.personalDetails, function (checked) {
                                if (!checked.checked) {
                                        newDataList.push(checked);
                                }
                        });
                        var origListLength = $scope.personalDetails.length;
                        var newListLength = newDataList.length;
                        if (newListLength < origListLength) {
                                if (confirm("אתה עומד למחוק רשומה!")) {
                                        $scope.personalDetails = newDataList;
                                }
                        }
                } else {
                        var newDataList = [];
                        if (confirm("אתה עומד למחוק את כל הרשומות!!")) {
                                $scope.personalDetails = newDataList;
                        }
                }
        };

        $scope.sortType = 'name'; // set the default sort type
        $scope.sortReverse = false; // set the default sort order
        $scope.filterArg = ""; // Set default value for search string
        $scope.isLoggedIn = true; //if not on main page hide login option.
});
