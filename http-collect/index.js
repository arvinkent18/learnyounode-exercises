const http = require('http');

const bl = require('bl');

if (process.argv.length < 3) {
  console.log('Please specify an endpoint');
}

const endpoint = process.argv[2];

http.get(endpoint, (response) => {
  response.pipe(bl((error, data) => {
    if (error) {
      console.error(error);
      return;
    }
    const content = data.toString();
    console.log(content.length);
    console.log(content);
  }));
});
