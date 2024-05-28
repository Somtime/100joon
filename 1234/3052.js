const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync(__dirname + '/3052.txt').toString().trim().split('\n');

const solution = (input) => {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    const remain = +input[i] % 42;
    if (!result.includes(remain)) result.push(remain)
  }
  return result.length;
}

const result = solution(input);
console.log(result);