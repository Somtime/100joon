const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim();
const input = fs.readFileSync(__dirname + '/10809.txt').toString().trim();

const solution = (input) => {
  let result = '';


  for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
    const char = String.fromCharCode(i);
    let index = -1;
    for (let j = 0; j < input.length; j++) {
      if (char === input[j]) {
        index = j;
        break;
      }
    }
    result += `${index} `;
  }
  return result;
}

const result = solution(input);
console.log(result);