const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// urlencoded allows us to get access to html form data
app.use(bodyParser.urlencoded({extended:true})); // allows us to go to any route and get response body

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

    // uses name attribute from the html input elements
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("Result of addition is: " + result);
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var bmi = weight / (height * height);

    res.send("Your BMI is: " + bmi);
});

app.listen(3000, function() {
    console.log("App is running on pert 3000");
});
