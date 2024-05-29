const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync(__dirname + '/25206.txt').toString().trim().split('\n');

const solution = (input) => {
  let totalCredit = 0;
  let totalGrade = 0;
  const obj = {
    'A+': 4.5,
    'A0': 4.0,
    'B+': 3.5,
    'B0': 3.0,
    'C+': 2.5,
    'C0': 2.0,
    'D+': 1.5,
    'D0': 1.0,
    'F': 0.0,
  };

  const reportCard = input.map(item => item.split(' '));
  for (const subject of reportCard) {
    const [, credit, grade] = subject;
    if (grade === 'P') continue;

    totalCredit += +credit;
    totalGrade += +credit * obj[grade];
  }

  return totalGrade / totalCredit;
}

const result = solution(input);
console.log(result);