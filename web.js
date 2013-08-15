var express = require('express');
var app = express();
app.use(express.logger());

var buf = new Buffer();
buf = fs.readFileSync(index.html);
app.get('/', function(request, response) {
  response.send("Hi2");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
