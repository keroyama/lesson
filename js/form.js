angular.module('myApp', [])
  .controller('MyController', ['$scope', function($scope) {
    $scope.onsubmit = function() {
      console.log('メールアドレス：' + $scope.user.mail);
    };
  }]);