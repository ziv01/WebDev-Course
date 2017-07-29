var app = angular.module("crmApp", ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'app/home/home.html',
			controller: 'TableCtrl'
		})
		.when('/customers', {
			templateUrl: 'app/customersTables/customers.html',
			controller: 'TableCtrl'
		})
		.when('/technical', {
			templateUrl: 'app/technicalTables/technicians.html',
			controller: 'TechTableCtrl'
		})
	.otherwise({
			redirectTo: '/home'
		});
});
