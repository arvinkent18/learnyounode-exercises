'use strict';

const net = require('net');
const moment = require('moment');
const PORT = process.argv[2];

if (process.argv.length < 2) {
  console.log('Please specify a port');
  return;
}

const server = net.createServer((socket) => {
  socket.end(moment().format('YYYY-MM-DD HH:mm') + '\n');
});

server.listen(PORT);
