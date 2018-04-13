var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});
app.get('*', function (req, res) {
    console.log(req.originalUrl);
   res.sendFile( __dirname + "/" + req.originalUrl );
});
var server = app.listen(8000, function () {
   var host = server.address().address
   var port = server.address().port
});