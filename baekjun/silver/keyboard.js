//https://www.acmicpc.net/problem/4378
// 문제

// 가끔, 그러나 때때로, 우리들은 키보드에서 양손을 오른쪽으로 한 칸씩 이동한 상태로 두고 타자를 치는 경우가 있다.
//즉, "ACMICPC.NET"을 위와 같은 방법으로 치게 되면 "SV,OV[V/MRY"이라는 이상한 문장을 보게 된다.

// 교준이는 장문을 쓰는데, 너무 급한 나머지 위와 같은 오류를 범한 채로 글을 완성해 버렸다.
// 이 글을 다시 쓰는 것은 교준이에게는 너무 힘든 일이다.교준이를 대신해서 오류를 고쳐주자.

// 입력
// 입력은 여러 줄로 이루어진다. 각 줄은 숫자나 공백, 알파벳 대문자, 위의 키보드에 표시되어 있는 문장 부호로
//이루어져 있다.Q, A, Z나 `(back-quote), 단어로 이루어진 키(Tab, BackSp, Control 등)는
//입력의 각 줄에 포함되지 않는다.예외적으로 공백(' ', SpaceBar)은 입력으로 들어올 수 있는데,
//스페이스 바는 너무 길어서 교준이가 위의 오류를 범하지 않는다.

// 출력
// 각 줄마다 오류를 고쳐 출력한다.

const input = `SV,OV[V/MRY`;

const keyboard = `qwertyuiop{}|p[]asdfghjkl;'l:"zxcvbnm,./m<>?1234567890-+~!@#$%^&*()_+`;
const keyboard1 = keyboard.toLocaleUpperCase();
let answer = "";
for (let i = 0; i < input.length; i++) {
  const idx = keyboard1.indexOf(input[i]);
  const fixed = keyboard1[idx - 1];
  if (!fixed) {
    answer += " ";
  } else {
    answer += fixed;
  }
}
console.log(answer);
