var express = require('express')
var serveIndex = require('serve-index');
var open = require('open');
var app = express();
var fs = require('fs');
var path = require('path');
var pgp = require('pg-promise')({
});

var date = new Date();
var current_hour = date.getHours();
app.use(serveIndex('/public'));
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send("Hello from /. The current time is: ", current_hour);
})

app.get('/about', function (req, res) {
    res.send("Hello from /about. The current time is: ", current_hour);
})

app.get('/revive', function (req, res) {
    res.render('index');
})

app.post('/resume', function (req, res) {
    res.writeHead(301, {"Location": "http://itimmy.com/resume"});
    res.end();

})

app.get('/github', function (req, res) {
    res.writeHead(301, {"Location": "https://github.com/tcsiwula"});
    res.end();
})

app.get('/linkedin', function (req, res) {
    res.writeHead(301, {"Location": "https://linkedin.com/in/tcsiwula"});
    res.end();
})

app.get('/twitter', function (req, res) {
    res.writeHead(301, {"Location": "https://twitter.com/tcsiwula"});
    res.end();
})

app.get('/angellist', function (req, res) {
    res.writeHead(301, {"Location": "https://angel.co/tcsiwula"});
    res.end();
})

app.get('/p1', function (req, res) {
    res.writeHead(301, {"Location": "https://github.com/tcsiwula/click_prediction"});
    res.end();
})

app.get('/p2', function (req, res) {
    res.writeHead(301, {"Location": "https://github.com/tcsiwula/search_engine"});
    res.end();
})


app.get('/projects/java-shell', function (req, res) {
    res.writeHead(301, {"Location": "https://github.com/tcsiwula/interactive_java_shell"});
    res.end();
})

app.get('/project2', function (req, res) {
    res.writeHead(301, {"Location": "https://twitter.com/tcsiwula"});
    res.end();
})

app.get('/project3', function (req, res) {
    res.writeHead(301, {"Location": "https://twitter.com/tcsiwula"});
    res.end();
})

app.get('/a', function (req, res) {
    res.writeHead(301, {"Location": "https://twitter.com/tcsiwula"});
    res.end();
})

app.get('/b', function (req, res) {
    res.writeHead(301, {"Location": "https://twitter.com/tcsiwula"});
    res.end();
})

app.get('/c', function (req, res) {
    res.writeHead(301, {"Location": "https://twitter.com/tcsiwula"});
    res.end();
})

app.get('/chatbot', function (req, res) {
    res.send("Hello from /. The current time is: ", current_hour);
})






app.listen(process.env.PORT || 5000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
    console.log("date = ", date);
    console.log("current_hour = ", current_hour);
    open('http://127.0.0.1:5000');
});
