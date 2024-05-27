const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync(__dirname + '/10811.txt').toString().trim().split('\n');

const solution = ([n, ...list]) => {
  const N = n[0];
  const result = Array.from({length: +N}, (_, index) => index + 1);
  list.map(item => item.split(' ')).map(item => {
    const start = item[0] - 1;
    const end = item[1] - 1;
    console.log('before', item[0], item[1], result);
    for (let i = 0; i < N; i++) {
      if (i >= start && i <= end) {
        const temp = result[i];
        result[i] = result[end - i];
        result[end - i] = temp;
      }
    }

    console.log('after', item[0], item[1], result);
  });
  return result.join(' ');
}

const result = solution(input);
console.log(result);

