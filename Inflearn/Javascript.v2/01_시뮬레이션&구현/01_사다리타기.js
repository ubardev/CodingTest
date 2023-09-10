function simulateLadderGame(n, horizontalLines) {
  return 0;
}

const n = 5;
const horizontalLines = [
  [1, 3],
  [3, 5],
];
const classPresident = simulateLadderGame(n, horizontalLines);
console.log(
  `이번 주 학급회장은 ${String.fromCharCode(
    64 + classPresident,
  )}번 학생입니다..`,
);
