function simulateLadderGame(n, ladder) {
  // 각 학생의 현재 위치를 저장할 배열 생성
  let result = Array.from({ length: n }, (_, index) =>
    String.fromCharCode(65 + index),
  );

  // 사다리타기 진행
  for (const row of ladder) {
    for (const x of row) {
      const temp = result[x - 1];
      result[x - 1] = result[x];
      result[x] = temp;
    }
  }

  return result;
}

// const n = 5;
// const ladder = [
//   [1, 3],
//   [2, 4],
//   [1, 4],
// ];

// const n = 7;
// const ladder = [
//   [1, 3, 5],
//   [1, 3, 6],
//   [2, 4],
// ];

// const n = 8;
// const ladder = [
//   [1, 5],
//   [2, 4, 7],
//   [1, 5, 7],
//   [2, 5, 7],
// ];

const n = 12;
const ladder = [
  [1, 5, 8, 10],
  [2, 4, 7],
  [1, 5, 7, 9, 11],
  [2, 5, 7, 10],
  [3, 6, 8, 11],
];
const result = simulateLadderGame(n, ladder);
console.log(result);
