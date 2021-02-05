// 문제 https://www.acmicpc.net/problem/1120
// 길이가 N으로 같은 문자열 X와 Y가 있을 때, 두 문자열 X와 Y의 차이는 X[i] ≠ Y[i]인 i의 개수이다. 예를 들어, X=”jimin”, Y=”minji”이면, 둘의 차이는 4이다.

// 두 문자열 A와 B가 주어진다. 이때, A의 길이는 B의 길이보다 작거나 같다. 이제 A의 길이가 B의 길이와 같아질 때 까지 다음과 같은 연산을 할 수 있다.

// A의 앞에 아무 알파벳이나 추가한다.
// A의 뒤에 아무 알파벳이나 추가한다.
// 이때, A와 B의 길이가 같으면서, A와 B의 차이를 최소로 하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 A와 B가 주어진다. A와 B의 길이는 최대 50이고, A의 길이는 B의 길이보다 작거나 같고, 알파벳 소문자로만 이루어져 있다.

// 출력
// A와 B의 길이가 같으면서, A와 B의 차이를 최소가 되도록 했을 때, 그 차이를 출력하시오.

// 예제 입력 1 
// adaabc aababbc
// 예제 출력 1 
// 2

let [a, b] = 'jimin minji'.toString().trim().split(' ')

// b를 기준으로 a를 비교하는 반복문을 돈다.
// 같은 인덱스비교와, 오른쪽 왼쪽 비교를 해서 같은 값이 더 많은 쪽으로 알파벳을 추가해준다.

const gap = b.length - a.length
let total = Array(gap+1).fill([0])

// 차이나는 길이만큼 문자열 비교
for (let k = gap<1? 0 : 1; k <= gap; k++) 
{
   let [left, right, main] = [0, 0, 0]
   for (let i = 0; i < a.length; i++) 
   {
      if (a[i] === b[i]) main++
      if (i - k >= 0) {
         a[i] === b[i - k] ? right++ : null
         a[i - k] === b[i] ? left++ : null

      }
      else
      {
         a[i] === b[i + k] ? left++ : null
         a[i + k] === b[i] ? right++ : null
      }

   }
   total[k] = [left, right, main]
}
console.log(total)
let maxCount = 0
let mv = 0
for(let i = 0; i< total.length; i ++)
{
   const common = Math.max.apply(null,total[i]) 
   if(common > maxCount )
   {
      maxCount = common, mv = i
   }
}
// const dir = total[mv].indexOf(maxCount) // 0 이면 왼쪽 1이면 오른쪽 2면 정면
// let diff = 0

// if(dir === 2)
// {
//    for(let i = 0; i < a.length; i++)
//    {
//       if(a[i] !== b[i]) diff+=1
//    }
// }
// else
// {
//    for(let i = 0; i < b.length; i++)
//    {
//       if(a[i] !== b[mv+i]) diff+=1
//    }
// }
console.log(a.length - maxCount)