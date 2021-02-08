//https://www.acmicpc.net/problem/1053
const input = 'babacvvabba'.toString().trim()
const [mid,n] = [Math.floor( (1 + input.length)/2),input.length-1]
let diff = Array(n).fill('')
let dif = []
let count = 0
for(let i = 0; i <= n; i ++ )
{
   if(input[i] === input[n-i]) 
   {
      console.log(i,n-i)
      continue
   }
   else
   {
      // diff[i] = input[i], diff[n-i] = input[n-i]
      dif.push(input[n-i])
   }
}

console.log(dif)