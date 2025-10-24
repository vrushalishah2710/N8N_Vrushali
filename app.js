// Import the built-in HTTP module
const http = require('http');

// Define the server's address and port
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the Content-Type header for all responses
  res.setHeader('Content-Type', 'text/plain');

  // This is the routing logic
  // It checks the URL path of the request
  if (req.url === '/') {
    res.statusCode = 200; // OK
    res.end('Welcome to the Home Page!\n');
  } else if (req.url === '/about') {
    res.statusCode = 200; // OK
    res.end('This is the About Page.\n');
  } else {
    res.statusCode = 404; // Not Found
    res.end('404 - Page Not Found\n');
  }
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log('Try visiting http://localhost:3000/about');
});
