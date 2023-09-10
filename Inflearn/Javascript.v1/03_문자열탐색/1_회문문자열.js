// for문 돌려서 풀기
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - 1 - i]) return "NO";
  }

  return answer;
}

// reverse사용해서 풀기
function solution2(s) {
  const str = s.toLowerCase();
  return str === str.split("").reverse().join("") ? "YES" : "NO";
}

let str = "gooG";
// console.log(solution(str));
console.log(solution2(str));
