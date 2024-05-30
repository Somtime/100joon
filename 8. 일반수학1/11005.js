const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim();
const input = fs.readFileSync(__dirname + '/11005.txt').toString().trim();

const solution = (input) => {
  let [number, B] = input.split(' ').map(item => +item);
  let result = [];


  while (number >= B) {
    const quotient = Math.floor(number / B);
    const remainder = number % B;

    if (remainder >= 10) result.push(String.fromCharCode(remainder + 55));
    else result.push(remainder);

    number = quotient;
  }

  if (number >= 10) result.push(String.fromCharCode(number + 55));
    else result.push(number);

  return result.reverse().join('');
}

const result = solution(input);
console.log(result);