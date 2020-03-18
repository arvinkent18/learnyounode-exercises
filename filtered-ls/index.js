const fs = require('fs');

const path = require('path');

const ext = process.argv[3];

if (process.argv.length < 4) {
  console.log('Please specify a path and a filter parameter');
}

fs.readdir(process.argv[2], (err, fileList) => {
  if (err) {
    console.err(err);
    return;
  }

  const filteredFiles = fileList.filter((file) => path.extname(file) === `.${ext}`);

  filteredFiles.forEach((file) => {
    console.log(file);
  });
});
