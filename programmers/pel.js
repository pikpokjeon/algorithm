function solution (s)
{
   const getMax = (arr) => Math.max.apply(null,arr)
   let [odd,even] = [[],[]]
   const n = s.length

   for(let i = 0; i < n; i++)
   {
      if(i > 0 && i < n -1)
      {
         if(s[i] === s[i+1])even.push(i)
         s[i-1] === s[i+1]? odd.push(i) : null
      }
      else if(n === 2 && s[i] === s[i+1]) even.push(i)
   }

   const go = (i,t,c,a) =>
   {
      if ( t+i+a > n || t-i < 0) return c
      if ( s[t+i+a] === s[t-i] ) return go(i+1,t,c+1,a)
      return c
   }
   const oddCases = odd.map(e => (go(1,e,0,0) * 2) + 1)
   const evenCases = even.map(e => go(0,e,0,1) * 2)
   console.log(oddCases,evenCases)
   const answer = getMax(oddCases) > getMax(evenCases) ? getMax(oddCases) : getMax(evenCases)
   console.log(answer)
   return answer
}

const f = ["abcdcba","abacdedc","hfsfeeeefsfa","asdffffffdsya","aa"]
f.forEach(e => solution(e))