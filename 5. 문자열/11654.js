const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync(__dirname + '/11654.txt').toString().trim().split('\n');

const solution = (input) => {
  return input[0].charCodeAt();
}

const result = solution(input);
console.log(result);