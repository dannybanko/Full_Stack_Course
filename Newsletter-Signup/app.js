const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const { json } = require('body-parser');


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post('/', function(req, res){
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    const https = require('https');

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

    var jsonData = JSON.stringify(data);

    const url = "https://us20.api.mailchimp.com/3.0/lists/f5e91b7176"
    const options = {
        method: "POST",
        auth: "danny:1d460b1c5169e65a7b1edc37ebe88533-us20"
    }

    const request = https.request(url, options, function(response){
        response.on("data", function(data) {
            console.log(JSON.parse(data));
        })
    });

    request.write(jsonData);
    request.end;

});

app.listen(3000, function(){
    console.log('Server is running on port 3000');
});

//1d460b1c5169e65a7b1edc37ebe88533-us20
//f5e91b7176