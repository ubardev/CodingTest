function solution(board) {
  const n = board.length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let x1 = 0,
    y1 = 0;
  let x2 = 0,
    y2 = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 2) {
        x1 = i;
        y1 = j;
      }
      if (board[i][j] === 3) {
        x2 = i;
        y2 = j;
      }
    }
  }

  let d1 = 0,
    d2 = 0;
  let count = 0;

  while (count < 10000) {
    count++;

    let nx1 = x1 + dx[d1];
    let ny1 = y1 + dy[d1];
    let nx2 = x2 + dx[d2];
    let ny2 = y2 + dy[d2];
    let flag1 = true,
      flag2 = true;

    if (nx1 < 0 || nx1 >= n || ny1 < 0 || ny1 >= n || board[nx1][ny1] === 1) {
      d1 = (d1 + 1) % 4;
      flag1 = false;
    }

    if (nx2 < 0 || nx2 >= n || ny2 < 0 || ny2 >= n || board[nx2][ny2] === 1) {
      d2 = (d2 + 1) % 4;
      flag2 = false;
    }

    if (flag1) {
      x1 = nx1;
      y1 = ny1;
    }

    if (flag2) {
      x2 = nx2;
      y2 = ny2;
    }

    if (x1 === x2 && y1 === y2) break;
  }

  if (count >= 10000) return 0;
  return count;
}

// const board = [
//   [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0, 2, 0, 0],
//   [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 3, 0, 0, 0, 1],
//   [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
//   [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
// ];

const board = [
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 2, 1],
  [0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 3],
];

const result = solution(board);
console.log(result);
