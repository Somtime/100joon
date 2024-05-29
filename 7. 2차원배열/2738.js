const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync(__dirname + '/2738.txt').toString().trim().split('\n');

const solution = (input) => {
  const [NM, ...list] = input;
  const [N, M] = NM.split(' ');
  const A = [];
  const B = [];
  const matrix = [];

  for (let i = 0; i < N; i++) {
    A.push(list[i].split(' ').map(item => +item));
  }

  for (let i = N; i < N * 2; i++) {
    B.push(list[i].split(' ').map(item => +item));
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!matrix[i]) matrix[i] = [];
      matrix[i][j] = A[i][j] + B[i][j]
    }
  }

  return matrix.map(item => item.join(' ')).join('\n');
}

const result = solution(input);
console.log(result);