/*
*Primary files for the API
*
*/

//Dependencies
const http = require('http');
const url  = require('url');

// The server should respond to all requests with a string
let server = http.createServer(function (req, res) {
    // Get the url and parse it
    let parsedUrl = url.parse(req.url,true);

    // Get the path
    let path = parsedUrl.pathname;
    let trimmedPath = path.replace(/^\/+|\/+$/g,'');

    // Send the response
    res.end('Hallo friends from  : '+trimmedPath);

    // Log the request path
    console.log('Request received on path: '+trimmedPath);
});

// Start the server and have it listenning on port 3000

server.listen(3000, function () {
    console.log("The server is listenning on port 3000")
})