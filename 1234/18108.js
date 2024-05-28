const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim();
const input = fs.readFileSync(__dirname + '/18108.txt').toString().trim();

const solution = (input) => {
  return input - 543;
}

const result = solution(input);
console.log(result);