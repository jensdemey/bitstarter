var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

//var buf = new Buffer(5);
//buf.write("Hello","utf-8");
var buf = fs.readFileSync('index.html');
app.get('/', function(request, response) {
  response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
