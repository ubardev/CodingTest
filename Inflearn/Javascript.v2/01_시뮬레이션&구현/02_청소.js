function solution(board, k) {
  const n = board.length;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let d = 1;
  let x = 0;
  let y = 0;
  let count = 0;

  while (count < k) {
    count++;
    let nx = x + dx[d];
    let ny = y + dy[d];

    if (nx < 0 || nx >= n || ny < 0 || ny >= n || board[nx][ny] === 1) {
      d = (d + 1) % 4;
      continue;
    }
    x = nx;
    y = ny;
  }

  return [x, y];
}

// const board = [
//   [0, 0, 0, 0, 0],
//   [0, 1, 1, 0, 0],
//   [0, 0, 0, 0, 0],
//   [1, 0, 1, 0, 1],
//   [0, 0, 0, 0, 0],
// ];
// const k = 10;

// const board = [
//   [0, 0, 0, 1, 0, 1],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1],
//   [1, 1, 0, 0, 1, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
// ];
// const k = 20;

const board = [
  [0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
];
const k = 25;

const result = solution(board, k);
console.log(result);
