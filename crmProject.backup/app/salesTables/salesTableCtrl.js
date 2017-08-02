app.controller("SalesTableCtrl", function ($scope, $http) {
        $http.get("app/salesTables/salesDetails.json")
                .then(function (response) { $scope.saleDetails = response.data; });


        $scope.addNew = function () {

                $scope.saleDetails.push({
                        'saleName': "",
                        'callID': "",
                        'description': "",
                        'budget': "",
                        'company': "",
                        'email': "",
                        'mobile': "",
                        'pastDeals': ""                        
                 });
         };

        $scope.remove = function () {
                var newDataList = [];
                //$scope.selectedAll = false;
                if ($scope.selectedAllSales !== true || $scope.selectedAllSales === null) {
                        angular.forEach($scope.saleDetails, function (checked) {
                                if (!checked.checked) {
                                        newDataList.push(checked);
                                }
                        });
                        var origListLength = $scope.saleDetails.length;
                        var newListLength = newDataList.length;
                        if (newListLength < origListLength) {
                                if (confirm("אתה עומד למחוק רשומה!")) {
                                        $scope.saleDetails = newDataList;
                                }
                        }
                } else {
                        var newDataList = [];
                        if (confirm("אתה עומד למחוק את כל הרשומות!!")) {
                                $scope.saleDetails = newDataList;
                        }
                }
        };
         
       $scope.sortType = 'name'; // set the default sort type
        $scope.sortReverse = false; // set the default sort order
        $scope.filterArg = ""; // Set default value for search string
        $scope.isLoggedIn = true; //if not on main page hide login option.
});