let input = `9
1 2 1 1 1 1 2 1 1
4
2 8
2 6
1 3
3 6`.toString().trim().split('\n')

const n = Number(input.shift())
const nums = input.shift().split(' ').map( e => Number(e))
nums.unshift(0)
const t = Number(input.shift())
let memo = Array(n).fill([]).map(e => [...new Array(n).fill(-1)])
let [odd,even] = [[],[]]
let [maxstart,maxcount] = [0,0]
for(let i = 0; i < n; i++)
{
   if(i > 0 && i < n )
   {
      if(nums[i] === nums[i+1])even.push(i)
      nums[i-1] === nums[i+1]? odd.push(i) : null
   }
   else if(n === 2 && nums[i] === nums[i+1]) even.push(i)
}
console.log(odd,even)

for(let i = 0; i < t; i ++)
{
   const [a, b] = input.shift().split(' ').map(e => Number(e))
   const f = b - a




   console.log(nums.slice(a,b+1),a,b,'\n')
   const go = (i,t,c,a) =>
   {
      if ( t+i+a > n || t-i < 0) return i
      if ( nums[t+i+a] === nums[t-i] ) return go(i+1,t,c+1,a)
      return i
   }
   let count = 0
   const start = Math.floor((a + b) / 2)
   const oddCases = odd.map(e => (go(1,e,-1,0) ))
   // const evenCases = even.map(e => go(0,e,0,1) )
   const evenCases = even.map(e => go(0,e,0,1) )
   console.log(oddCases,evenCases)

//    if(f % 2 === 0)
//    {
//       count = go(1,start,0,0)
//       if(count > maxcount)
//       {
//          maxcount = count, maxstart = start
//       }
//       console.log(maxcount,maxstart)
//    }
//    else 
//    {
//       count = go(0,start,0,1)
//       if(count > maxcount)
//       {
//          maxcount = count, maxstart = start
//       }
//       console.log(maxcount,maxstart)


//       console.log(start)
//    }
}
console.log(maxcount,maxstart)
