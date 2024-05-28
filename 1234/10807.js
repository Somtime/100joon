const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync(__dirname + '/10807.txt').toString().trim().split('\n');

const solution = (input) => {
  const length = input[0];
  const numberList = input[1].split(' ');
  const number = input[2];
  let result = 0;

  for (let i = 0; i < length; i++) {
    if (number === numberList[i]) result++;
  }

  return result;
}

const result = solution(input);
console.log(result);