const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim();
const input = fs.readFileSync(__dirname + '/1193.txt').toString().trim();

const solution = (input) => {
  let sum = 1, max = 0;

  for (; max < input; sum++) {
    max = sum * (sum + 1) / 2;
  }

  if (sum % 2 === 0) {
    const child = 1 + (max - input);
    const mother = sum - child;
    return `${child}/${mother}`;
  } else {
    const mother = 1 + (max - input);
    const child = sum - mother;
    return `${child}/${mother}`;
  }
}

const result = solution(input);
console.log(result);
