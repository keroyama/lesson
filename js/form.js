angular.module('myApp', [])
.controller('MyController', ['$scope', function($scope) {
    $scope.onsubmit = function() {
      console.log('メールアドレス：' + $scope.user.mail);
    };

    $scope.scalarValue = 'スカラー';
    $scope.arrayValue = ['あいうえお', 'かきくけこ'];
    $scope.hashValue = {name: '山田', sex: '男'};

    $scope.greeting = "こんにちわ名無しさん"
    $scope.onclick = function(){
        $scope.greeting = 'こんにちわ' + $scope.myName + 'さん';
    }
}]);