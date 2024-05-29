const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync(__dirname + '/11720.txt').toString().trim().split('\n');

const solution = (input) => {
  const [length, number] = input;
  let result = 0;
  for (let i = 0; i < length; i++) {
    result += +number[i];
  }
  return result;
}

const result = solution(input);
console.log(result);