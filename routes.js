//ROUTES
weatherApp.config(function ($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainCtrl'
        })
        .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastCtrl'
        })
        .when('/forecast/:days', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastCtrl'
        })
});