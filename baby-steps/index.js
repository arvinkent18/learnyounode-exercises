let result = 0;

for (let i = 2; i < process.argv.length; i += 1) {
  result += Number(process.argv[i]);
}

// eslint-disable-next-line no-console
console.log(result);
