// Create web server
// The server listens on port 3000
// The server responds to requests sent to /comments
// The server reads the file comments.json and returns its contents to the client
// The server returns an error code 500 if there is an error reading the file

var express = require('express');
var app = express();
var fs = require("fs");

// respond with "Hello World!" on the homepage
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// respond to GET requests to /comments
app.get('/comments', function (req, res) {
  // read comments.json file
  fs.readFile(__dirname + "/" + "comments.json", 'utf8', function (err, data) {
    console.log(data);
    res.end(data); // send data to client
  });
});

// respond to POST requests to /comments
app.post('/comments', function (req, res) {
  // read comments.json file
  fs.readFile(__dirname + "/" + "comments.json", 'utf8', function (err, data) {
    data = JSON.parse(data); // convert to object
    data["comment4"] = comment["comment4"]; // add new comment to object
    console.log(data);
    res.end(JSON.stringify(data)); // send data to client
  });
});

// respond to DELETE requests to /comments
app.delete('/comments', function (req, res) {
  // read comments.json file
  fs.readFile(__dirname + "/" + "comments.json", 'utf8', function (err, data) {
    data = JSON.parse(data); // convert to object
    delete data["comment4"]; // delete comment4
    console.log(data);
    res.end(JSON.stringify(data)); // send data to client
  });
});

// respond to PUT requests to /comments
app.put('/comments', function (req, res) {
  // read comments.json file
  fs.readFile(__dirname + "/" + "comments.json", 'utf8', function (err, data) {
    data = JSON.parse(data); // convert to object
    data["comment4"] = comment["comment4"]; // add new comment to object
    console.log(data);
    res.end(JSON.stringify(data)); // send data to client
  });
});

// respond to GET requests to /comments/1
app.get('/comments/:id', function (req, res)