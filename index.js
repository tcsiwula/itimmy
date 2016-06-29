var express = require('express')
var serveIndex = require('serve-index');
var open = require('open');
var app = express();
var fs  = require('fs');

var pgp = require('pg-promise')({
    // Initialization Options
});
var date = new Date();
var current_hour = date.getHours();
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
app.use(serveIndex(__dirname + '/public'))
app.use(serveIndex(__dirname + '/revive'))


app.get('/', function(req,res){
    res.send("Hello from /. The current time is: ", current_hour);
})

app.get('/about', function(req,res){
    res.send("Hello from /about. The current time is: ", current_hour);
})


app.get('/revive', function(req,res){
    res.render('index');
})

app.post('/resume', function(req,res){
    res.writeHead(301, {"Location": "http://itimmy.com/resume"});
    res.end();

})

app.post('/resume2', function(req, res, next) {
    var path = __dirname + '/public';
    var stream = fs.readStream(path);
    var filename = "resume.pdf";
    // Be careful of special characters

    filename = encodeURIComponent(filename);
    // Ideally this should strip them

    res.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
    res.setHeader('Content-type', 'application/pdf');

    stream.pipe(res);
})

app.get('/github', function(req,res){
    res.writeHead(301, {"Location": "https://github.com/tcsiwula"});
    res.end();
})

app.get('/linkedin', function(req,res){
    res.writeHead(301, {"Location": "https://linkedin.com/in/tcsiwula"});
    res.end();
})


app.get('/twitter', function(req,res){
    res.writeHead(301, {"Location": "https://twitter.com/tcsiwula"});
    res.end();
})


app.get('/b', function(req,res){
    res.send("Hello from /redume. The current time is: ", current_hour);
})


app.get('/c', function(req,res){
    res.send("Hello from /redume. The current time is: ", current_hour);
})


app.get('/d', function(req,res){
    res.send("Hello from /redume. The current time is: ", current_hour);
})








// var options = {
//     key: fs.readFileSync('./example/localhost.key'),
//     cert: fs.readFileSync('./example/localhost.crt')
// };
//
// require('http2').createServer(options, app).listen(8080);




app.listen(process.env.PORT || 5000, function()
{
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
    console.log("date = ", date);
    console.log("current_hour = ", current_hour);
    open('http://127.0.0.1:5000');
});



// postgresql integration -- see http://expressjs.com/en/guide/database-integration.html
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://username:password@host:port/database");

// db.one("SELECT $1 AS value", 123)
//     .then(function (data) {
//         console.log("DATA:", data.value);
//     })
//     .catch(function (error) {
//         console.log("ERROR:", error);
//     });
