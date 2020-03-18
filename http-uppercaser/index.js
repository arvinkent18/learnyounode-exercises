const http = require('http');

const map = require('through2-map');

const PORT = process.argv[2];

if (process.argv.length < 2) {
  console.error('Please specify a port to listen on.');
}

const server = http.createServer((request, response) => {
  request.pipe(map((chunk) => chunk.toString().toUpperCase())).pipe(response);
});

server.listen(PORT);
