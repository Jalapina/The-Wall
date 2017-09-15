var myApp = angular.module('myApp',['ngRoute','ngCookies']);

myApp.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'partials/wall.html',
        controller: 'postController'
    })
    .when('/login',{
        templateUrl: 'partials/login-reg.html',
        controller: 'userController'
    })
    .otherwise({
        redirect: '/'
    })
})