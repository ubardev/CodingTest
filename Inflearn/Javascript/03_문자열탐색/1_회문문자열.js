function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - 1 - i]) return "NO";
  }

  return answer;
}

let str = "gooG";
console.log(solution(str));
