//const express = require("express");
//const path = require("path");
//const http = require("http");

//const app = express();

/*app.set("views", path.resolve(__dirname, "views"));

app.get("/", function(req, res) {
    res.render("index.html");
});

http.createServer(app).listen(3000, function() {
    console.log("Server Running On Port 3000");
});
*/
var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/about', function(req, res){
    res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/contact', function(req, res){
    res.sendFile(path.join(__dirname+'/contact.html'));
});

//Sets up Server
app.use('/', router);
app.listen(process.env.port || 3000);
console.log("Running on port 3000");
