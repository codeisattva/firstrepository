
var http = require('http');

var express = require('express');
var app = express();
app.use(express.static('assets'));
// Use the environment variable or use a given port
const PORT = process.env.PORT || 8080;


// Start the server
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:%s', PORT);
});

