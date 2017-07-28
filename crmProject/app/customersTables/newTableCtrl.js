app.controller("TableCtrl", ['$scope', '$http', function ($scope, $http) {
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
                $scope.selectedAll = false;
                angular.forEach($scope.personalDetails, function (checked) {
                        console.log(checked);
                        if (!checked.checked) {
                                  newDataList.push(checked); 
                       }
                });
                var origListLength=$scope.personalDetails.length;
                var newListLength=newDataList.length;
                if (newListLength < origListLength) {
                      if (confirm("אתה עומד למחוק רשומה!")) {
                        $scope.personalDetails = newDataList;
                      }  
                }                
        };
        
        $scope.checkAll = function () {
                var newDataList = [];
                console.log($scope.selectedAll);
                if (confirm("אתה עומד למחוק את כל הרשומות!!")) {
                        $scope.personalDetails = newDataList;
                }
                /* if (!$scope.selectedAll) {
                        $scope.selectedAll = true;
                } else {
                        $scope.selectedAll = false;
                }
                angular.forEach($scope.personalDetails, function (personalDetails) {
                        personalDetails.selected = $scope.selectedAll;
                }
                */
        };
        $scope.sortType = 'name'; // set the default sort type
        $scope.sortReverse = false; // set the default sort order
        $scope.filterArg = ""; // Set default value for search string
        $scope.message = "Click on the hyper link to view the students list."; //TODO: just for testing routing
}]);