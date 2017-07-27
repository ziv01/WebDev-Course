app.controller("ListController", ['$scope', '$http', function ($scope, $http) {
        $http.get("CustomersDetails.json")
                .then(function (response) { $scope.personalDetails = response.data; });


        $scope.addNew = function () {

                $scope.personalDetails.push({
                        'fullName': "",
                        'address': "",
                        'email': ""
                });
               // TODO: Remove after testing
               console.log(JSON.stringify($scope.personalDetails))
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

        $scope.filterArg = "";
}]);