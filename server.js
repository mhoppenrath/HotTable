var express = require("express");
var fs = require("fs");
var path = require('path');


var app = express();
var PORT = 8080;

var tables = [{
  name: "John",
  phone:"888-8888",
  email:"fake@al.com",
  id: "id"
}]


app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname +'/home.html'))
});
app.get("/reserve", function(req,res) {
  res.sendFile(path.join(__dirname +'/reserve.html'))
});
app.get("/tables", function(req,res) {
  res.sendFile(path.join(__dirname +'/tables.html'))
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
