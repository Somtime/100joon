const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim();
const input = fs.readFileSync(__dirname + '/11382.txt').toString().trim();

const solution = (input) => {
  return input.split(' ').reduce((a, b) => Number(a) + Number(b));
}

const result = solution(input);
console.log(result);