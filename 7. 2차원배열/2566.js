const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync(__dirname + '/2566.txt').toString().trim().split('\n');

const solution = (input) => {
  let max = 0;
  let coord = [];

  const arr = input.map(item => item.split(' ').map(item => +item));

  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] >= max) {
        max = arr[i][j];
        coord = [i + 1, j + 1]
      }
    }
  }

  console.log(max);
  console.log(coord.join(' '));
}

solution(input);