/** 
 * Module dependencies.
 */


var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


console.log("Testing");


/*
var temperature = document.querySelector(".temperature-value p");
var location = document.querySelector(".location p");

var weather = {};



var KELVIN = 273;
var key = "5a5c31b9c3adb1179cfecf9a4400afe0"; 


function setPosition(){
  let lat = 32.8801;
  let long = 117.2340;

  getWeather(lat, long);
}


function getWeather(lat, long){
  let api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
  console.log(api);

  fetch(api)
    .then(function(response){
      let data = response.json();
      return data;
    })
    .then(function(data){
      weather.temperature.value = Math.floor(data.main.temp) - KELVIN;
      weather.description = data.weather[0].description;
    })
    .then(function(){
      displayWeather();
    });
}





function displayWeather(){
  temperature.innerHTML = `${weather.temperature.value}°<span>C</span>`;
}
*/
