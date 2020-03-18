const fs = require('fs');

const path = require('path');

module.exports = (directory, extension, callback) => {
  // eslint-disable-next-line consistent-return
  fs.readdir(directory, (err, fileList) => {
    if (err) {
      return callback(err);
    }

    const filteredFiles = fileList.filter((file) => path.extname(file) === `.${extension}`);

    callback(null, filteredFiles);
  });
};
