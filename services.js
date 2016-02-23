//SERVICES
weatherApp.service('cityService', function(){
    this.city = "New York, NY";
});

weatherApp.service('weatherService',['$resource', function($resource) {
        this.getWeather =  function( city, days) {
            var weatherAPI
                = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=?????",
                    {callback: "JSON_CALLBACK"},
                    {get: {method: "JSONP" }}
                );
            return weatherAPI.get({q:city, cnt: days});
        };
}]);