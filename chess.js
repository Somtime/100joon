const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync(__dirname + '/chess.txt').toString().trim().split('\n');

const solution = (input) => {
  let result = '';
  const needPieceCount = [1, 1, 2, 2, 2, 8];
  const pieces = input.split(' ');

  pieces.map((piece, index) => {
    const count = needPieceCount[index] - piece;
    if (index !== 0) result += ` ${count}`;
    else result = count;
  });

  return result;
}

const result = solution(input[0]);
console.log(result);