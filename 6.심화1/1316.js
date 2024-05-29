const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync(__dirname + '/1316.txt').toString().trim().split('\n');

const solution = (input) => {
  const [length, ...stringList] = input;
  let result = 0;

  for (let i = 0; i < length; i++) {
    const str = stringList[i];
    const temp = [];
    let bool = true;

    for (let j = 0; j < str.length; j++) {
      if (!temp.includes(str[j])) {
        temp.push(str[j]);
        continue;
      }

      if (str[j - 1] !== str[j]) {
        bool = false;
        break;
      }
    }
    if (bool) result++;
  }

  return result;
}

const result = solution(input);
console.log(result);