// express dependency
const express = require("express");
// express app (express module)
const app = express();

// what should happen when something reaches ther server (home page)
app.get("/", function(req, res) {
    res.send("<h1>Hello World</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me and email@gmail.com");
});

app.get("/about", function(req, res){
    res.send("Hello, I am Danny, I am a Computer Science Student at University of Washington");
});

// listen at a specific port
app.listen(3000, function() {
    console.log("Express server is running on port 3000");
});


