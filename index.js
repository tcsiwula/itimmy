var express = require('express')
var serveIndex = require('serve-index');

var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
app.use(serveIndex(__dirname + '/public'))

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})

// app.get('/', function(request, response) {
//     response.send('itimmy.com is under constructions. Migrating to iojs 😀')
//     document.body.style.backgroundColor = 'red'
//     response.log("Node app is running at localhost:" + app.get('port'))
// })
