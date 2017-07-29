app.controller("SalesTableCtrl", ['$scope', '$http', function ($scope, $http) {
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
                $scope.selectedAll = false;
                angular.forEach($scope.saleDetails, function (checked) {
                        console.log(checked);
                        if (!checked.checked) {
                                  newDataList.push(checked); 
                       }
                });
                var origListLength=$scope.saleDetails.length;
                var newListLength=newDataList.length;
                if (newListLength < origListLength) {
                      if (confirm("אתה עומד למחוק רשומה!")) {
                        $scope.saleDetails = newDataList;
                      }  
                }                
        };
        
        $scope.checkAll = function () {
                var newDataList = [];
                console.log($scope.selectedAll);
                if (confirm("אתה עומד למחוק את כל הרשומות!!")) {
                        $scope.saleDetails = newDataList;
                }
                /* if (!$scope.selectedAll) {
                        $scope.selectedAll = true;
                } else {
                        $scope.selectedAll = false;
                }
                angular.forEach($scope.saleDetails, function (saleDetails) {
                        saleDetails.selected = $scope.selectedAll;
                }
                */
        };
        $scope.sortType = 'name'; // set the default sort type
        $scope.sortReverse = false; // set the default sort order
        $scope.filterArg = ""; // Set default value for search string
        $scope.isLoggedIn = true; //if not on main page hide login option.
}]);