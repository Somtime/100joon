const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync(__dirname + '/10811.txt').toString().trim().split('\n');

const solution = ([NM, ...list]) => {
  const [N, M] = NM.split(' ');
  const result = Array.from({ length: +N }, (_, index) => index + 1);

  for (let i = 0; i < M; i++) {
    const [start, end] = list[i].split(' ');
    const temp = [];

    for (let j = start - 1; j < end; j++) {
      temp.push(result[j]);
    }

    temp.reverse();

    result.splice(start - 1, end - start + 1, ...temp);
  }

  return result.join(' ');
}

const result = solution(input);
console.log(result);