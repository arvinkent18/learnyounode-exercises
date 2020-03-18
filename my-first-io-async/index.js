const fs = require('fs');

const file = process.argv[2];

if (process.argv.length < 3) {
  console.log('Please specify a file to read');
}

fs.readFile(file, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.split('\n').length - 1;
  console.log(lines);
});
