'use strict';

const http = require('http');
const bl = require('bl');

module.exports = {
  get(endpoint) {
    const promise = new Promise((resolve, reject) => {
      http.get(endpoint, (response) => {
        response.pipe(bl((err, data) => {
          if (err) {
            return reject(err);
          }
          const content = data.toString();
          return resolve(content);
        }));
      });
    });
    return promise;
  },
};
