
var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
    
//response.send('Hello World! 2');
var text = fs.readFileSync('./index.html', 'utf-8');
response.send(text);
//response.send(fs.readFileSync("./index.html").toString();
console.log (text)
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
/*
var fs = require('fs');
var buffer = new Buffer(256);
buffer = fs.readFileSync('index.html');
var content = buffer.toString();
console.log(content);
*/
/*
var fs = require("fs");
var data = fs.readFileSync("./index.html", "utf8");
console.log(data);
*/
