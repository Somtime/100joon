const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync(__dirname + '/2675.txt').toString().trim().split('\n');

const solution = (input) => {
  const [length, ...stringList] = input;
  let result = [];

  for (let i = 0; i < length; i++) {
    result[i] = '';

    const [count, str] = stringList[i].split(' ');
    for (let j = 0; j < str.length; j++) {
      result[i] += str[j].repeat(count);
    }
  }

  return result.join('\n');
}

const result = solution(input);
console.log(result);