const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim();
const input = fs.readFileSync(__dirname + '/2903.txt').toString().trim();

const solution = (input) => {
  let number = 2;

  for (let i = 0; i < input; i++) {
    number = number + Math.pow(2, i)
  }

  return Math.pow(number, 2);
}

const result = solution(input);
console.log(result)