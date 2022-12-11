var app = angular.module('myApp',[]);
app.controller('myCtrl', function($scope) {
    $scope.users = [
        {
            name: "Mango", 
            balance : 13,
        },
        {
            name: "Jay", 
            balance : 1,
        },
        {
            name: "Cat", 
            balance : 10000,
        },
    ];
    $scope.current = {};

    $scope.addUser = function() {
        if($scope.current != "") {
            $scope.users.push($scope.current);
            $scope.current = {};
        }
    };
    $scope.removeUser = function(users) {
        $scope.users.splice(users,1);
    };

    $scope.editUser = function(user) {
        $scope.current = $scope.users[user];
    };
    $scope.saveUser = function(user) {
      $scope.users[user] = $scope.current
      $scope.current = {};
    };
});