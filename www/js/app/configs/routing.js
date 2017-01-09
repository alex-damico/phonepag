angular.module('myApp').config(['$routeProvider', '$locationProvider',
	function ($routeProvider, $locationProvider) {

	//$locationProvider.html5Mode(true);

	$routeProvider.when('/', {
			templateUrl : 'js/app/controllers/appctrl/appCtrl.html',
			controller : 'appCtrl',
			controllerAs : 'controller'
		})
		.when("/second", {
			templateUrl: "js/app/controllers/secondctrl/secondCtrl.html",
			controller : 'secondCtrl',
			controllerAs : 'controller'
		});

}]);
