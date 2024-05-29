const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync(__dirname + '/27866.txt').toString().trim().split('\n');

const solution = (input) => {
  const [str, number] = input;

  return str[number - 1];
}

const result = solution(input);
console.log(result);