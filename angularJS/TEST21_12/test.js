var app = angular.module("app", []);

app.controller('myCtrl', function ($scope, $http) {
    $http.get('test.json').success (function (data) {
        $scope.user = data;
    });
    $scope.addUser = function() {
        $scope.user.push({name: $scope.name, username: $scope.username, password: $scope.password, phone: $scope.user.phone });
    }

    $scope.getTotalUser = function () {
        return $scope.user.length;
    }

    $scope.reverseMess = function() {
        return $scope.user.name.split("").reverse().join("");
    }


    $scope.submitForm = function (isValid) {
        if(isValid) {
            alert('form is valid');
        }
    };
    
});

function testCtrl($scope) {
    $scope.names = [
        {name: "Thanh Thao"},
        {name: "Hong Hanh"}
    ];

    $scope.addName = function() {
        $scope.names.push({name: $scope.myName});
    }

    $scope.reverseMess = function () {
        return $scope.myName.split("").reverse().join("");
    }
}