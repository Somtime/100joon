const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync(__dirname + '/2563.txt').toString().trim().split('\n');

const solution = (input) => {
  const [, ...pieces] = input;
  let result = 0;
  let paper = Array.from({ length: 100 }, () => new Array(100).fill(0));
  pieces.map(piece => piece.split(' ')).forEach(piece => {
    const [x, y] = piece;
    for (let i = y -1; i < +y + 9; i++) {
      for (let j = x - 1; j < +x + 9; j++) {
        paper[i][j] = 1;
      }
    }
  });

  paper.map(item => {
    item.map((inner) => {
      result += inner;
    })
  });

  return result;
}

const result = solution(input);
console.log(result);