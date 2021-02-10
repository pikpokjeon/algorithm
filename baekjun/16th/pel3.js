// 문제
// 동호와 규완이는 212호에서 문자열에 대해 공부하고 있다. 규완이는 팰린드롬을 엄청나게 좋아한다. 팰린드롬이란 앞에서부터 읽으나 뒤에서부터 읽으나 같게 읽히는 문자열을 말한다.

// 동호는 규완이를 위한 깜짝 선물을 준비했다. 동호는 규완이가 적어놓고 간 문자열 S에 0개 이상의 문자를 문자열 뒤에 추가해서 팰린드롬을 만들려고 한다. 동호는 가능하면 가장 짧은 문자열을 만들려고 한다.

// 동호가 만들 수 있는 가장 짧은 팰린드롬의 길이를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 문자열 S가 주어진다. S의 길이는 최대 1000이다.

// 출력
// 첫째 줄에 동호가 만들 수 있는 가장 짧은 팰린드롬의 길이를 출력한다.

const input = `baababaabc`.toString().trim()
const n = input.length
// const start = Math.floor((n / 2))


let answer = Array(n).fill(0)
const go = (i,center,a) =>
{
   const [end,start] = [center+i+a,center-i]
   console.log(input[center],start,end)

   // console.log(input[start], input[end],start,end)
   if ( end > n) return 
   if ( input[start] === input[end] )
   {
      return go(i+1,center,a)
   }
   else
   { answer[center]+=1
      console.log(center)
      return go(i+1,center,a)

   }
   return 
}


for(let i = 0; i < n; i ++)
{

   if(input[i] === input[i+1]) go(0,i,1) 
   if(input[i-1] === input[i+1])  (go(1,i,0) )
   console.log(answer)

}



// go(0,start,0)
console.log()