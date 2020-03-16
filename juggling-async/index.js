'use strict';

const request = require('./request');

if (process.argv.length < 5) {
  console.log('Please specify 3 endpoints');
  return;
}

const promise = new Promise((resolve) => resolve());

promise.then(() => {
  return printResults(process.argv[2]);
}).then(() => {
  return printResults(process.argv[3]);
}).then(() => {
  return printResults(process.argv[4]);
});

const printResults = (endpoint) => {
  return request.get(endpoint)
      .then((response) => {
        console.log(response);
      });
};
