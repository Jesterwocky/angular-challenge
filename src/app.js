const angularApp = angular.module("angularModule", []);

angularApp.controller("testController", ($scope) => {
  $scope.testMessage = "MESSAGE HERE";
});
