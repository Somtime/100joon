const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim();
const input = fs.readFileSync(__dirname + '/5622.txt').toString().trim();

const solution = (input) => {
  let result = 0;
  let number = '';
  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case 'A': case 'B': case 'C':
        number += 2;
        break;
      case 'D': case 'E': case 'F':
        number += 3;
        break;
      case 'G': case 'H': case 'I':
        number += 4;
        break;
      case 'J': case 'K': case 'L':
        number += 5;
        break;
      case 'M': case 'N': case 'O':
        number += 6;
        break;
      case 'P': case 'Q': case 'R': case 'S':
        number += 7;
        break;
      case 'T': case 'U': case 'V': case 'u':
        number += 8;
        break;
      case 'W': case 'X': case 'Y': case 'Z':
        number += 9;
        break;
    }
  }

  for (let i = 0; i < number.length; i++) {
    result += +number[i] + 1;
  }

  return result;
}

const result = solution(input);
console.log(result);