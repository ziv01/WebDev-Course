app.controller("InventoryTableCtrl", function ($scope, $http) {
        $http.get("app/inventoryTables/inventoryDetails.json")
                .then(function (response) { $scope.inventoryDetails = response.data; });


        $scope.addNew = function () {

                $scope.inventoryDetails.push({
                        'inventoryName': "",
                        'manufacturer': "",
                        'dealer': "",
                        'itemID': "",
                        'category': "",
                        'itemCount': "",
                        'itemPrice': "",
                        'description': ""                        
                 });
         };
        $scope.remove = function () {
                var newDataList = [];
                //$scope.selectedAll = false;
                if ($scope.selectAllInventory !== true || $scope.selectAllInventory === null) {
                        angular.forEach($scope.inventoryDetails, function (checked) {
                                if (!checked.checked) {
                                        newDataList.push(checked);
                                }
                        });
                        var origListLength = $scope.inventoryDetails.length;
                        var newListLength = newDataList.length;
                        if (newListLength < origListLength) {
                                if (confirm("אתה עומד למחוק רשומה!")) {
                                        $scope.inventoryDetails = newDataList;
                                }
                        }
                } else {
                        var newDataList = [];
                        if (confirm("אתה עומד למחוק את כל הרשומות!!")) {
                                $scope.inventoryDetails = newDataList;
                        }
                }
        };
        
        $scope.sortType = 'name'; // set the default sort type
        $scope.sortReverse = false; // set the default sort order
        $scope.filterArg = ""; // Set default value for search string
        $scope.isLoggedIn = true; //if not on main page hide login option.
});