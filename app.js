const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var items = ["Buy Food", "Cook Food", "Eat Food",];
var workItems = [];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var today = new Date();
  var date = today.toLocaleDateString("en-US", options);

  res.render("list", {
    listTitle: date,
    newItem: items,
  });
});

app.post('/', function(req, res) {
let  item = req.body.todo;

if(req.body.list === "Work"){
  workItems.push(item);
  res.redirect('/work');
}

else{
  items.push(item);
  res.redirect("/");
}

});

app.get('/work', function(req, res) {
  res.render('list',{
    listTitle : "Work List",
    newItem : workItems,
  });
});

app.get('/about', function(req, res) {
  res.render('about',);
});

app.listen("3000", function() {
  console.log("im on at port 3000");
});
