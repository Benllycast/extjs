var API_URL = 'http://mysite.com/api/users/';
var data = {
        headers : [
        'id',
        'name',
        'last_name',
        'login',
        'password',
        'mail',
        'tel',
        //'date_log'
        ],
        rows : {} 
    };

// $.getJSON(API_URL,function (users) {
//     window.data.rows = users;
// });
    
var app = angular.module('app',[]);
app.controller('main', function ($scope) {
    $scope.nombre = "benjamin";
    $scope.apellido = "castillo";
});

app.controller('app2', function ($scope, $http) {
    $scope.user = {};
    $scope.user.id = 1;
    $scope.user.name = "name";
    $scope.user.last_name = "last name";
    $scope.user.login = "login";
    $scope.user.password = "password";
    $scope.user.mail = "mail@no.com";
    $scope.user.tel = "tel";
    $scope.user.status = false;
    $http.get(API_URL).
        success(function(data, status, headers, config) {
            $scope.usuarios = data;
        }).
        error(function (data, status, headers, config) {
            // body...
            console.error("Erro en el envio de la peticion");
        });
    $scope.clickRead = function (evt) {
        console.log("click in Read");
        $http.get(API_URL+$scope.user.id)
            .success(function (data) {
                console.log(data);
                $scope.user = data; 
            })
            .error(function (data) {
                console.error("NO SE ENCUENTRA!!!");
            })
    };
    $scope.clickCreate = function (evt) {
        console.log("click in create");
        data = {}
        data.name = $scope.user.name; 
        data.last_name = $scope.user.last_name; 
        data.login = $scope.user.login; 
        data.password = $scope.user.password; 
        data.mail = $scope.user.mail;
        data.tel = $scope.user.tel;
        data.status = $scope.user.status; 
        $http.post(API_URL, data)
            .success(function (data) {
                // body...
                console.log("OK!!!\n"+JSON.stringify(data));
                $scope.user = data;
            })
            .error(function (data) {
                // body...
                console.error("error!!!\n"+JSON.stringify(data));
            });
    };
    $scope.clickUpdate = function (evt) {
        console.log("click in Update");
        data = {}
        data.id = $scope.user.id; 
        data.name = $scope.user.name; 
        data.last_name = $scope.user.last_name; 
        data.login = $scope.user.login; 
        data.password = $scope.user.password; 
        data.mail = $scope.user.mail;
        data.tel = $scope.user.tel;
        data.status = $scope.user.status;
        $http.put(API_URL+data.id, data)
            .success(function (data) {
                // body...
                console.log("OK!!!\n"+JSON.stringify(data));
                $scope.user = data;
            })
            .error(function (data) {
                // body...
                console.error("error!!!\n"+JSON.stringify(data));
            });
    };
    $scope.clickDelete = function (evt) {
        console.log("click in Delete");
        $http.delete(API_URL+$scope.user.id)
            .success(function (data) {
                // body...
                console.log("OK!!!\n"+JSON.stringify(data));
                $scope.user = data;
            })
            .error(function (data) {
                // body...
                console.error("error!!!\n"+JSON.stringify(data));
            });
    };
});

$(document).ready(function (evt) {
    
});

