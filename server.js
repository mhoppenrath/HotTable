var express = require("express");
var fs = require("fs");
var path = require('path');
var table = require("./data/table-data.js");
var waitinglist = require("./data/waitinglist-data.js");


var app = express();
var PORT = 8080;

var tables = [{
  name: "John",
  phone:"888-8888",
  email:"fake@al.com",
  id: "id"
}]


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname +'/home.html'));
  res.sendFile(path.join(__dirname +'/data/reset'));
  res.sendFile(path.join(__dirname +'/data/style'));
});
app.get("/reserve", function(req,res) {
  res.sendFile(path.join(__dirname +'/reserve.html'))
});
app.get("/tables", function(req,res) {
  res.sendFile(path.join(__dirname +'/tables.html'))
});
app.get("/api/tables", function(req,res) {
  res.json(table);
});
app.get("/api/waitlist", function(req,res) {
  res.json(waitinglist);
});



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
