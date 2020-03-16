'use strict';

const fs = require('fs');
const path = require('path');

module.exports = (directory, extension, callback) => {
  fs.readdir(directory, (err, fileList) => {
    if (err) {
      return callback(err);
    }

    const filteredFiles = fileList.filter((file) => {
      return path.extname(file) === '.' + extension;
    });

    callback(null, filteredFiles);
  });
};
