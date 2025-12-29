const {readFileSync, writeFileSync} = require('fs');
//equals to the following  expression
// const fs = require('fs');
// fs.readFileSync(...)
// fs.writeFileSync(...)

const first = readFileSync('./content/first.txt', 'utf8');
console.log("Finished reading the first file!");
const second = readFileSync('./content/second.txt', 'utf8');
console.log('Finished reading the second file!');

console.log( "Outputs of the first and second texts:", first, second);

// create a new file by writting the content of these two file into one
writeFileSync('./content/result-sync.txt', `\n Here is the result : ${first}, ${second}`, {flag: 'a'});

console.log("finished writing the file!");


// const fs = require('fs');

// console.log('start');

// const first = fs.readFileSync('./content/first.txt', 'utf8');
// const second = fs.readFileSync('./content/second.txt', 'utf8');

// fs.writeFileSync('./content/test-sync.txt', `Here is the test result of combining the first and the second texts together: ${first}, ${second}`);

// console.log('done with this syncronous task');
// console.log('starting the next one');
