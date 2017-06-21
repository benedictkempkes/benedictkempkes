var app = angular.module("angularApp", ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "views/angularViews/partials/layout1"
    })
    .when('/angular/layout2', {
      templateUrl: "views/angularViews/partials/layout2"
    });
});