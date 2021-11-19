const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
//const { request } = require('http');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    const query = req.body.cityname; // city name from the form on index.html
    const key = "6df4d5e72897fe51926988d80fe3cdb3";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + key;
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on('data', function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;

            res.write("<h1>The temperature in " + query + " is " + temp + " degress kelvin</h1>");
            res.write("<h3>The weather is currently " + description + "</h3>");
            res.send();
        })
    })
})

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});