const app = require('./app');
const http = require('http');

// Server setup
const port = process.env.PORT || 5001;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);