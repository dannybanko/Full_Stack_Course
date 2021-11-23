const express = require('express');
const bodyParser = require('body-parser');
let ejs = require('ejs');
const date = require(__dirname + '/date.js');

const app = express();
let items = ["Buy Food", "Dishes", "Walk Dog"];
let workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    
    let day = date();
    
    res.render("list", {dayVar: day, newListItems: items});
});

app.post('/', function(req, res) {
    let item = req.body.todo;
    items.push(item);
    res.redirect("/");  // redirect to home route to make the post request
});

app.get("/work", function(req, res) {
    res.render('list', {dayVar: "Work List", newListItems: workItems});
});

app.post('/work', function(req, res) {
    console.log(req.body);
    let item = req.body.item;
    if (req.body.list === "Work"){
        workItems.push(item);
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect('/');
    }
});

app.get("/about", function(req, res) {
    res.render("about");
})

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});
