const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim();
const input = fs.readFileSync(__dirname + '/10926.txt').toString().trim();

const solution = (input) => {
  return input + "??!";
}

const result = solution(input);
console.log(result);