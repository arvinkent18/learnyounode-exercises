const request = require('./request');

if (process.argv.length < 5) {
  console.log('Please specify 3 endpoints');
}

const printResults = (endpoint) => request.get(endpoint)
  .then((response) => {
    console.log(response);
  });


const promise = new Promise((resolve) => resolve());

// eslint-disable-next-line max-len
promise.then(() => printResults(process.argv[2])).then(() => printResults(process.argv[3])).then(() => printResults(process.argv[4]));
