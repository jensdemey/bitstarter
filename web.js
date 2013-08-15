var express = require('express');
var app = express();
app.use(express.logger());

var buf = new Buffer(50);
//buf.write("Hello","utf-8");
buf.readFileSync(index.html);
app.get('/', function(request, response) {
  response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
