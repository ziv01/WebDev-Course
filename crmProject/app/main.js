var app = angular.module("crmApp", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/customers', {
			templateUrl: 'app/customersTables/customers.html',
			controller: 'TableCtrl'
		})
		.when('/viewStudents', {
			templateUrl: 'viewStudents.html',
			controller: 'StudentController'
		})
		.otherwise({
			redirectTo: '/home'
		});
});
