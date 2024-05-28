const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync(__dirname + '/5597.txt').toString().trim().split('\n');

const solution = (input) => {
  const students = Array.from({length: 30}, (_, index) => index + 1 + '');
  return students.filter(student => !input.includes(student)).join('\n');
}

const result = solution(input);
console.log(result);