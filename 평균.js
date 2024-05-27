const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync(__dirname + '/평균.txt').toString().trim().split('\n');

const solution = (input) => {
  const count = input[0];
  const scores = input[1].split(' ');
  const maxScore = Math.max(...scores);
  let calScore = 0;

  scores.map((score) => {
    calScore += Number(score / maxScore * 100);
  });

  return calScore / count;
}

const result = solution(input);
console.log(result);