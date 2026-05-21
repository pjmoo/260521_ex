// if

const age = 15;
// true, false
if (age >= 13) // 조건식
{
  console.log("중학생이다");
}

const score = Math.random() * 100; // Math.random() : 0보다 크거나 1보다 작은 숫자
console.log(score);

if (score >= 90) {
  console.log("합격");
}
// if (score < 90) {
else {
  console.log("불합격");
}

// if (score >= 80) {
//   console.log("A");
// }
// if (score >= 60) {
//   console.log("B");
// }
// if (score >= 40) {
//   console.log("C");
// }
// if (score < 40) {
//   console.log("D");
// }
// else if -> 앞의 조건을 달성하면 뒤의 조건으로 인한 실행은 무시
if (score >= 80) {
  console.log("A");
} else if (score >= 60) {
  console.log("B");
} else if (score >= 40) {
  console.log("C");
} else {
  console.log("D");
}

// truthy, falsy