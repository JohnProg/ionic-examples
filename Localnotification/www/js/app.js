// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})
.controller("CameraCtrl", function($scope, $cordovaCamera) {
  $scope.pictureUrl = "http://placehold.it/300x300";
  $scope.takePicture = function () {
    var options = {
      destinationType: Camera.DestinationType.DATA_URL,
      encodingType: Camera.EncodingType.JPEG,
    }
    $cordovaCamera.getPicture(options)
      .then(function (data) {
        //alert("camera data: " + angular.toJson(data));
        $scope.pictureUrl = "data:image/jpeg;base64," + data;
      }, function (error) {
        alert("camera error: " + angular.toJson(data));
      });
  }
})
.controller("NotifyCtrl", function($scope, $ionicPlatform, $cordovaLocalNotification) {
  $ionicPlatform.ready(function() {
    $cordovaLocalNotification.add({message: 'Hola John'});
  });
})
