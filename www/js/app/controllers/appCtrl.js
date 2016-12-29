angular.module('myApp').controller('appCtrl',['$scope', '$location', '$http', function ($scope, $location, $http) {
  $scope.immagine = {
    src: null,
    isError: null
  }
  $scope.ciao = "Ciao";

  $scope.welcome = function() {
    navigator.notification.vibrate(3000);
    alert("Benvenuto!!");
  };

  $scope.eccomi = function() {
    $scope.ciao = $scope.ciao + "1";
  };

  $scope.getFoto = function() {
    navigator.camera.getPicture(function(imagedata){
      $scope.immagine.src = "data:image/jpeg;base64," + imagedata;

      $scope.immagine.isError = false;

      $scope.$apply();

    }, function onFail(message) {
      $scope.immagine.isError = true;

      alert('Failed because: ' + message);
    }, {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: Camera.EncodingType.JPEG,
      saveToPhotoAlbum: false,
      correctOrientation:true
    });
  };


  $scope.comuni = null;

  $scope.richiesta = function() {
    $http.get("http://tuttunizzatore.sorint.it/json/comuni?q=berg").then(function successCallback(response) {
  	  $scope.comuni = response.data;
    }, function errorCallback(response) {
  	  $scope.comuni = null;
    });
  }
}]);
