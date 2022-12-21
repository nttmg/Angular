var app = angular.module("App", []);

App.controller('myCtrl', function ($scope, $http) {
    $http.get('test.json').success (function (data) {
        $scope.user = data;
    })
    $scope.submitForm = function (isValid) {
        if(isValid) {
            alert('form is valid');
        }
    };
    
})