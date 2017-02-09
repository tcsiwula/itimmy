'use strict';
var express = require('express')
var serveIndex = require('serve-index');
var open = require('open');
var app = express();
var fs = require('fs');
var path = require('path');

const bodyParser = require('body-parser');
const request = require('request');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var date = new Date();
var current_hour = date.getHours();
app.use(serveIndex('/public'));
app.use(express.static('public'));
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
const APIAI_TOKEN = process.env.APIAI_TOKEN;

const server = app.listen(process.env.PORT || 5000, () => {
    console.log("date = ", date);
    console.log("current_hour = ", current_hour);
    console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
    open('http://127.0.0.1:5000');
});

app.get('/', function (req, res) {
    res.send("Hello from /. The current time is: ", current_hour);
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

app.get('/about', function (req, res) {
    res.send("Hello from /about.");
})

// page https://www.facebook.com/Comedy-Bot-144000482774878/
// app https://developers.facebook.com/apps/1342241162503801/messenger/
/* For Facebook Validation */
app.get('/messenger_chatbot', (req, res) => {
    if (req.query['hub.mode'] && req.query['hub.verify_token'] === 'tuxedo_cat') {
        res.status(200).send(req.query['hub.challenge']);
    } else {
        res.send("Hello from 403 status.");
        res.status(403).end();
    }
});

/* Handling all messenges */
app.post('/messenger_chatbot', (req, res) => {
    console.log(req.body);
    if (req.body.object === 'page') {
        req.body.entry.forEach((entry) => {
            entry.messaging.forEach((event) => {
                if (event.message && event.message.text) {
                    sendMessage(event);
                }
            });
        });
        res.status(200).end();
    }
});

function sendMessage(event) {
  let sender = event.sender.id;
  let text = event.message.text;

  console.log('*** RECEIVED ***');
  console.log(event);

  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {access_token: PAGE_ACCESS_TOKEN},
    method: 'POST',
    json: {
      recipient: {id: sender},
      message: {text: text}
    }
  }, function (error, response) {
    if (error) {
        console.log('Error sending message: ', error);
    } else if (response.body.error) {
        console.log('Error: ', response.body.error);
    }
  });
}