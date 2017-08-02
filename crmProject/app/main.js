var app = angular.module("crmApp", ['ngRoute','ngAnimate', 'ui.bootstrap']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
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
		.when('/sales', {
			templateUrl: 'app/salesTables/sales.html',
			controller: 'SalesTableCtrl'
		})
		.when('/inventory', {
			templateUrl: 'app/inventoryTables/inventory.html',
			controller: 'InventoryTableCtrl'
		})
		.when('/login', {
			templateUrl: 'app/login/login.html',
			controller: 'LoginCtrl'
		})
		
	.otherwise({
			redirectTo: '/'
		});
});


