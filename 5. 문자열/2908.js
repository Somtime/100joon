const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim();
const input = fs.readFileSync(__dirname + '/2908.txt').toString().trim();

const solution = (input) => {
  let result = 0;
  input.split(' ').map(number => {
    let num = '';
    for (let i = number.length - 1; i >= 0; i--) {
      num += number[i];
    }
    if (num > result) result = num;
  });

  return result;
}

const result = solution(input);
console.log(result);