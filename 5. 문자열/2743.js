const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim();
const input = fs.readFileSync(__dirname + '/2743.txt').toString().trim();

const solution = (input) => {
  return input.length;
}

const result = solution(input);
console.log(result);