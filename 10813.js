const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync(__dirname + '/10813.txt').toString().trim().split('\n');

const solution = (input) => {
  const NM = input[0].split(' ');
  const N = NM[0];
  const M = NM[1];
  const result = [];
  const changes = input.filter((_, index) => index > 0)
    .map(item => item.split(' '));

  for (let i = 0; i < N; i++) {
    result.push(i + 1);
  }

  changes.map(change => {
    const temp = result[change[0] - 1];
    result[change[0] - 1] = result[change[1] - 1];
    result[change[1] - 1] = temp;
  });

  return result.join(' ');
}

const result = solution(input);
console.log(result);