const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim();
const input = fs.readFileSync(__dirname + '/팰린드롬.txt').toString().trim();

const solution = (input) => {
  const max = Math.floor((input.length) / 2);
  for (let i = 0; i < max; i++) {
    if (input[i] !== input[input.length - 1 - i]) return 0;
  }

  return 1;
}

const result = solution(input);
console.log(result);