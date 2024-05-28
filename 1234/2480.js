const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim();
const input = fs.readFileSync(__dirname + '/2480.txt').toString().trim();

const solution = (input) => {
  const [dice1, dice2, dice3] = input.split(' ').map(item => +item);


  if (dice1 === dice2 && dice2 === dice3 && dice3 === dice1) return 10000 + dice1 * 1000;
  else if (dice1 !== dice2 && dice2 !== dice3 && dice3 !== dice1) return Math.max(dice1, dice2, dice3) * 100;
  else {
    if (dice1 === dice2 || dice2 === dice3) return 1000 + dice2 * 100;
    else return 1000 + dice3 * 100;
  }
}

const result = solution(input);
console.log(result);