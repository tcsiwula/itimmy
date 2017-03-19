'use strict';
var express = require('express');
var serveIndex = require('serve-index');
var open = require('open');
var app = express();
var fs = require('fs');
var path = require('path');
const bodyParser = require('body-parser');
const request = require('request');
const cheerio = require('cheerio');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var date = new Date();
var current_hour = date.getHours();
app.use(serveIndex('/public'));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send("Hello from /. The current time is: ", current_hour);
})

app.get('/m', function (req, res) {
  res.writeHead(301, {
    "Location": "https://www.youtube.com/watch?v=lsSC2vx7zFQ&t=5s&list=PLV4VhMOmOJk-pG_9wJUcDCha3LN3Ru6dz&index=1"
  });
  res.end();
})

app.get('/tenx', function (req, res) {
  res.writeHead(301, {"Location": "https://github.com/jonrahoi/ten-x-chatbot"});
  res.end();
})

app.post('/resume', function (req, res) {
  res.writeHead(301, {"Location": "http://itimmy.com/resume.pdf"});
  res.end();
})

app.post('/resume1', function (req, res) {
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

app.get('/about', function (req, res) {
  res.send("Hello from /about.");
})

app.get('/scrape', function (req, res) {
  //All the web scraping magic will happen here
})

/* For Facebook Validation */
app.get('/messenger_chatbot', (req, res) => {
  res.writeHead(301, {"Location": "https://rocky-journey-79030.herokuapp.com/messenger_chatbot/"});
  res.end();
});

app.get('/chatbot', (req, res) => {
  res.writeHead(301, {"Location": "https://www.facebook.com/Comedy-Bot-144000482774878/"});
  res.end();
});

const server = app.listen(process.env.PORT || 5000, () => {
  console.log("date = ", date);
  console.log("current_hour = ", current_hour);
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
  open('http://127.0.0.1:5000');
});