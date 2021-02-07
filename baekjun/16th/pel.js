let input = `18
1 1 1 2 1 1 2 3 3 2 1 1 1 1 2 2 1 1
6
1 2
2 6
3 9
7 10
8 16
13 18`.toString().trim().split('\n')

const [n,t] = [input[0],input[2]].map( _ => Number(_))
const nums = input[1].split(' ').map( _ => Number(_))
let memo = Array(n).fill([]).map((_,idx) => { const tmp = [...new Array(n).fill(0)]; tmp[idx] = 1; return tmp }) 
const go = (i,center,a) =>
{
   const [end,start] = [center+i+a,center-i]
   if ( end > n || start  < 0) return 
   if ( memo[start][end] < 1 && nums[start] === nums[end])
   {
      memo[start][end] = 1
      return go(i+1,center,a)
   }
   return 
}
let answer = []
for(let i = 3; i < 3 + t ; i ++)
{
   const [a, b] = input[i].split(' ').map(e => Number(e)-1)
   if(memo[a][b] < 1)
   {
      // 반복이 시작되는 지점
      const start = Math.floor(((a + b) / 2))
      // 팰린드롬의 가능성이 있다면?
      // 재귀함수로 팰린드롬 확인 
      // go 함수의 패러미터 
      // (초기 비교 인덱스차이, 비교 중앙인덱스, 짝수이면 = 1)
      if(nums[start] === nums[start+1]) go(0,start,1) 
      if(nums[start-1] === nums[start+1])  (go(1,start,0) )
      answer.push(memo[a][b])
   }
   else { answer.push(memo[a][b]) }
}
// 포문에서 콘솔로그를 출력하면 시간 초과가 뜨기에, 반복문 종료 후 답을 출력 해준다
console.log(answer.join('\n'))