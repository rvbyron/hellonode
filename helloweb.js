// Use Express to create our web server
var express = require("express");

// Get an instance of the express object
var app = express();

// Create a callback action for the root get request
app.get("/", function (request, response) {
    response.send("Hello World!")
});

// Listen on port 3000
var server = app.listen(3000, function () {

    // Get the host IP Address currently being used.
    var host = server.address().address;

    // Get the port currently being used.
    var port = server.address().port;

    console.log("Listening using protocol(http) at host(%s) port(%s)", host, port);
})

