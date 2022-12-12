var app = angular.module("App", []);

app.controller('ContactController', function ($scope) {
    var uid = 1;
    $scope.contacts = [
        { id: 0, 'name' : 'Ngo Anh Tuan', 'email': 'tuananhngo@gmail.com', 'phone': '111-222-333'},
        { id: 0, 'name' : 'Hong Hanh', 'email': 'tHanh@gmail.com', 'phone': '178782-333'},
        { id: 0, 'name' : 'Ngo Anh', 'email': 'anhngo@gmail.com', 'phone': '16584633'},
        { id: 0, 'name' : 'Thanh Thao', 'email': 'hngo@gmail.com', 'phone': '557841221'}

    ];

    $scope.orders = [
        {
            id: 1,
            title:" Name Ascending",
            key: "name",
            reverse: false
        },
        {
            id: 2,
            title: "Name Decending",
            key: "name",
            reverse: true
        },
        {
            id: 3,
            title: "Email Ascending",
            key: "email",
            reverse: false
        },
        {
            id: 4,
            title: "Email Decending",
            key: "email",
            reverse: true
        },
    ]
    $scope.order = $scope.orders[0];
    $scope.saveContact = function () {
        if ($scope.newcontact.id == null) {
            $scope.newcontact.id = uid++;
            $scope.contacts.push($scope.newcontact);
        } else {
            for(i in $scope.contacts) {
                if($scope.contacts[i].id == $scope.newcontact.id) {
                    $scope.contacts[i] =$scope.newcontact;
                }
            }
        }
        $scope.newcontact = {};
    }

    $scope.delete = function (id) {
        for(i in $scope.contacts) {
            if ($scope.contacts[i].id == id) {
                $scope.contacts.splice(i, 1);
                $scope.newcontact = {};
            }
        }
    }

    $scope.edit = function (id) {
        for (i in $scope.contacts) {
            if($scope.contacts[i].id == id) {
                $scope.newcontact =angular.copy($scope.contacts[i]);
            }
        }
    }
});