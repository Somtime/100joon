const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim();
const input = fs.readFileSync(__dirname + '/1152.txt').toString().trim();

const solution = (input) => {
  if (input === '') return 0;
  return input.split(' ').length;
}

const result = solution(input);
console.log(result);