'use strict';

const fs = require('fs');

const file = process.argv[2];

if (process.argv.length < 3) {
  console.log('Please specify a file to read');
  return;
}

const content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n').length - 1;

console.log(lines);
