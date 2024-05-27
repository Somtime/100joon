const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim();
const input = fs.readFileSync(__dirname + '/star.txt').toString().trim();

const solution = (input) => {
  for (let i = 1; i <= input; i++) {
    const count = 2 * i - 1;
    console.log(' '.repeat(input - i) + '*'.repeat(count));
  }

  for (let i = input - 1; i >= 1; i--) {
    const count = 2 * i - 1;
    console.log(' '.repeat(input - i) + '*'.repeat(count));
  }
}

solution(input);