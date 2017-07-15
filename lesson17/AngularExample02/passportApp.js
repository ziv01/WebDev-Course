var app = angular.module('passportApp', []);
app.controller('PassportListCtrl', function($scope) {
	$scope.passports = [{num: 111, owner: 'אבי כהן'},
						{num: 222, owner: 'מיכל לוי'},
						{num:333, owner: 'אלון ישראלי'}
	];
	
});

