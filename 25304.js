const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync(__dirname + '/25304.txt').toString().trim().split('\n');

const solution = ([amount, , ...items]) => {
  let result = 0;

  items.forEach(item => {
    const [amount, count] = item.split(' ');
    result += (amount * count);
  });

  return result == amount ? 'Yes' : 'No';
}

const result = solution(input);
console.log(result);