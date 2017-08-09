crmApp.controller("HomeCtrl", function ($scope, $uibModal, $location, activeUser) {
    $scope.login = function() {
        $uibModal.open({
            templateUrl: "app/login/login.html",
            controller: "LoginCtrl"
        })
    }
    $scope.logout = function() {
        //var user = null;
        activeUser.logout();
    }
});
