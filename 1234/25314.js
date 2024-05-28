const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim();
const input = fs.readFileSync(__dirname + '/25314.txt').toString().trim();

const solution = (number) => {
  let long = 'long';
  for (let i = 1; i < number / 4; i++) long = `${long} long`;
  return `${long} int`;
}

const result = solution(input);
console.log(result);