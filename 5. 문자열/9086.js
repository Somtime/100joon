const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync(__dirname + '/9086.txt').toString().trim().split('\n');

const solution = (input) => {
  const [length, ...stringList] = input;

  for (let i = 0; i < length; i++) {
    const str = stringList[i];
    console.log(str[0] + str[str.length - 1]);
  }
}

solution(input);
