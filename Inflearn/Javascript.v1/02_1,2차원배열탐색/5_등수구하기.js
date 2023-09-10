function solution(n, arr) {
  let result = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i] < arr[j]) {
        result[i]++;
      }
    }
  }

  return result;
}

console.log(solution(5, [87, 89, 92, 100, 76]));
