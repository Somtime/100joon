const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync(__dirname + '/2525.txt').toString().trim().split('\n');

const solution = (input) => {
  const [A, B] = input[0].split(' ');
  const C = input[1];
  const totalMinute = Number(B) + Number(C);
  const addHour = Math.floor(totalMinute / 60);
  let hour = Number(A) + addHour % 24;
  if (hour >= 24) hour -= 24;
  const minute = totalMinute % 60;
  return `${hour} ${minute}`;

}

const result = solution(input);
console.log(result);