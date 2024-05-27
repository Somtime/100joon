const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim();
const input = fs.readFileSync(__dirname + '/1157.txt').toString().trim();

const solution = (input) => {
  let result = '';
  let count = 0;
  const list = {};
  const string = input.toUpperCase();

  for (let i = 0; i < string.length; i++) {
    if (list[string[i]]) list[string[i]]++;
    else {
      list[string[i]] = 1;
    }
  }

  for (item in list) {
    if (list[item] > count) {
      count = list[item];
      result = item;
    } else if (list[item] === count) {
      result = '?';
    }
  }

  return result;
}

const result = solution(input);
console.log(result);