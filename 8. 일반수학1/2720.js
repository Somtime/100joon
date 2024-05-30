const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync(__dirname + '/2720.txt').toString().trim().split('\n');

const solution = (input) => {
  const [, ...changes] = input.map(item => +item);
  let result = [];

  changes.forEach((change, i) => {
    result[i] = [0, 0, 0, 0];
    while (change > 0) {
      if (change >= 25) {
        const quarter = Math.floor(change / 25);
        change -= quarter * 25;
        result[i][0] = quarter;
      } else if (change >= 10) {
        const dime = Math.floor(change / 10);
        change -= dime * 10;
        result[i][1] = dime;
      } else if (change >= 5) {
        const nickel = Math.floor(change / 5);
        change -= nickel * 5;
        result[i][2] = nickel;
      } else if (change >= 1) {
        const penny = Math.floor(change / 1);
        change -= penny;
        result[i][3] = penny;
      }
    }
  });

  return result.map(item => item.join(' ')).join('\n');
}

const result = solution(input);
console.log(result);