const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim();
const input = fs.readFileSync(__dirname + '/2869.txt').toString().trim();

const solution = (input) => {
  const [go, back, distance] = input.split(' ').map(item => +item);
  let result = 0;
  result = Math.ceil((distance - go) / (go - back)) + 1;
  return result;
}

const result = solution(input);
console.log(result);
