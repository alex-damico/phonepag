angular.module('myApp').controller('secondCtrl',['$scope', '$location', function ($scope, $location) {
  $scope.backPage = function() {
    //cambio pagina
		$location.path("/");
  }
}]);
