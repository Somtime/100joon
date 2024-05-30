const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim();
const input = fs.readFileSync(__dirname + '/2292.txt').toString().trim();

const solution = (input) => {
  let result = 1;
  let number = 1;

  for (let i = 1; number < input; number += (6 * i), i++) {
    result++;
  }
  return result;
}

const result = solution(input);
console.log(result);