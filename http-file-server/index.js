const http = require('http');
const fs = require('fs');

const PORT = process.argv[2];
const file = process.argv[3];

if (process.argv.length < 3) {
  console.error('Please specify a port and a file to stream.');
}

const server = http.createServer((_request, response) => {
  const fileContent = fs.readFileSync(file).toString();
  response.write(fileContent);
  response.end();
});

server.listen(PORT);
