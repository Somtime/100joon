const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync(__dirname + '/10810.txt').toString().trim().split('\n');

const solution = (input) => {
  let result = [];
  const ballList = [];
  const MN = input[0].split(' ');
  const N = MN[0];
  const M = MN[1];
  const balls = input.filter((item, index) => index > 0)
  .map(item => item.split(' '));

  for (let i = 0; i < N; i++) {
    ballList.push(0);
  }

  for (let i = 0; i < M; i++) {
    const start = balls[i][0];
    const end = balls[i][1];
    const ball = balls[i][2];
    for (let j = start - 1; j < end; j++) {
      ballList[j] = Number(ball);
    }
  }

  return ballList.join(' ');
}

const result = solution(input);
console.log(result);