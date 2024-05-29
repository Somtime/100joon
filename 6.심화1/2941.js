const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim();
const input = fs.readFileSync(__dirname + '/2941.txt').toString().trim();

const solution = (input) => {
  const chars = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=',];

  for (let char of chars) {
    input = input.replaceAll(char, 'a');
  }

  return input.length;
}

const result = solution(input);
console.log(result);