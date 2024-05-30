const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync(__dirname + '/10798.txt').toString().trim().split('\n');

const solution = (input) => {
  const result = [];
  input.forEach((row, i) => {
    row.split('').forEach((col, j) => {
      if (!result[j]) result[j] = [];
      result[j][i] = col;
    });
  });

  return result.join('').replaceAll(',', '');
}

const result = solution(input);
console.log(result);