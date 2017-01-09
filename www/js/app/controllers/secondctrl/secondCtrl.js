angular.module('myApp').controller('secondCtrl',['$scope', '$location', function ($scope, $location) {
  $scope.cordinate = null;

  $scope.backPage = function() {
    //cambio pagina
		$location.path("/");
  }

  $scope.getPosizione = function() {
    navigator.geolocation.getCurrentPosition(function(position) {
      $scope.cordinate = 'Latitude: '+ position.coords.latitude +
              ' Longitude: '+ position.coords.longitude +
              ' Altitude: ' + position.coords.altitude +
              ' Accuracy: ' + position.coords.accuracy +
              ' Altitude Accuracy: ' + position.coords.altitudeAccuracy +
              ' Heading: ' + position.coords.heading +
              ' Speed: ' + position.coords.speed +
              ' Timestamp: ' + position.timestamp;

      $scope.$apply();

    }, function(error) {
      alert('code: '+ error.code + 'message: ' + error.message);
    });
  }
}]);
