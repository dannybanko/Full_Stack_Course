const express = require('express');
const bodyParser = require('body-parser');
let ejs = require('ejs');

const app = express();
var items = [];

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);
    res.render("list", {dayVar: day, newListItems: items});
});

app.post('/', function(req, res) {
    var item = req.body.todo;
    items.push(item);
    res.redirect("/");  // redirect to home route to make the post request
})



app.listen(3000, function() {
    console.log("Server is running on port 3000");
});
