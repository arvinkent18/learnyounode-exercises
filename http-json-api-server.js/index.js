const http = require('http');
const PORT = process.argv[2];

if (process.argv.length < 3) {
  console.error('Please specify a port to listen on.');
  return;
}

const server = http.createServer();
server.listen(PORT);

parseTime = (url, res) => {
  if (!url.query.iso) {
    throw new Error();
  }

  const date = new Date(url.query.iso);

  const formattedResponse = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(formattedResponse));
};

unixTime = (url, res) => {
  if (!url.query.iso) {
    throw new Error();
  }

  const date = new Date(url.query.iso);

  const formattedResponse = {
    unixtime: date.getTime(),
  };

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(formattedResponse));
};

server.on('request', (req, res) => {
  try {
    const url = require('url').parse(req.url, true);

    switch (url.pathname) {
      case '/api/parsetime':
        parseTime(url, res);
        break;
      case '/api/unixtime':
        unixTime(url, res);
        break;
      default:
        throw new Error();
    }

    throw new Error();
  } catch (error) {
    res.statusCode = 404;
    res.end();
  }
});
