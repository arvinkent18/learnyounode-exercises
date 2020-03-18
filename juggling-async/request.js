
const http = require('http');
// eslint-disable-next-line import/no-unresolved
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
