const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim();
const input = fs.readFileSync(__dirname + '/2745.txt').toString().trim();

const solution = (input) => {
  const [numbers, B] = input.split(' ');
  const changeNumbers = numbers.split('').map(item => getNumber(item));
  let result = 0;

  changeNumbers.forEach((number, i) => {
    result += Math.pow(B, changeNumbers.length - i - 1) * number;
  });

  return result;
}

const getNumber = (char) => {
  if (char < 10) return +char;
  return char.charCodeAt() - 55;
}

const result = solution(input);
console.log(result);