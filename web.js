var express = require('express');
var app = express();
app.use(express.logger());

var buf;
//buf.write("Hello","utf-8");
buf = fs.readFileSync('index.html','utf-8');
app.get('/', function(request, response) {
  response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
