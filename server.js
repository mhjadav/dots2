var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});

app.get('/confirm', function (req, res) {
    res.sendFile( __dirname + "/" + "confirm.html" );
 });

var server = app.listen(8000, function () {
   var host = server.address().address
   var port = server.address().port
});