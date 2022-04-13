const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var items = ["Buy Food", "Cook Food", "Eat Food",];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var today = new Date();
  var date = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: date,
    newItem: items,
  });
});

app.post('/', function(req, res) {
  item = req.body.todo;
  items.push(item);
  res.redirect("/");
});

app.listen("3000", function() {
  console.log("im on at port 3000");
});
