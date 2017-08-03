crmApp.controller("LoginCtrl", function ($scope, $uibModalInstance, $http, $location, activeUser, User) {

    // TODO: Detele this
    $scope.email = "ziv@ziv.com";
    $scope.password = "123";

    $http.get("app/data/users.json").then(function (response) {
        $scope.users = [];
        for (var i = 0; i < response.data.length; i++) {
            $scope.users.push(new User(response.data[i]));
        }

        //console.log(JSON.stringify($scope.users));
    });

    $scope.failedAttempt = false;

    $scope.login = function() {
        var user = getLoggedInUser();
        if (user !== null) {
            activeUser.login(user);
            $uibModalInstance.close("Logged-in");
            //$location.path("/")
        } else {
            $scope.failedAttempt = true;
        }
    }
  
    var getLoggedInUser = function() {
        for (var i = 0; i < $scope.users.length; i++) {
            if ($scope.users[i].email === $scope.email && $scope.users[i].password === $scope.password) {
                return $scope.users[i];
            }
        }
        return null;
    }

    $scope.dismiss = function () {
        $uibModalInstance.close("User dismissed");
    }
});