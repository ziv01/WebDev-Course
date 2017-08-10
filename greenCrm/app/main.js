var crmApp = angular.module("CrmApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]);
crmApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html",
            controller: "HomeCtrl"
        })

        .when("/customers", {
            templateUrl: "app/customersTables/customers.html",
            controller: "TableCtrl"
        })
        .when("/technical", {
            templateUrl: "app/technicalTables/technicians.html",
            controller: "TechTableCtrl"
        })
        .when("/sales", {
            templateUrl: "app/salesTables/sales.html",
            controller: "SalesTableCtrl"
        }).when("/inventory", {
            templateUrl: "app/inventoryTables/inventory.html",
            controller: "InventoryTableCtrl"            
        });

});