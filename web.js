var express = require('express');
var app = express();
app.use(express.logger());

//buf = new Buffer(50);
//buf = fs.readFileSync(index.html);
app.get('/', function(request, response) {
  response.send("Hi");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
