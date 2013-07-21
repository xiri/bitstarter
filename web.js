var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.configure( function(){
  app.use( express.static(__dirname+'/res') );
});

app.get('/', function(request, response) {
  var buf = fs.readFileSync( __dirname + '/index.html' )
  response.setHeader( 'Content-Type', 'text/html' );  
  response.send(buf.toString('utf-8'));
});

//app.set('domain','192.168.0.6');
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
