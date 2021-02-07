function solution(begin, target, words) {
   if(!words.includes(target)) return 0
   let toGet = target.split('')
   let toChange = begin.split('')
   let a = []
   const  n = begin.length
   let curr = toChange

   for(let i =0; i<words.length; i++)
   {
      const s = words[i].split('')
      let [temp,final] = [n,n]
      for(let k = 0; k <toGet.length; k ++)
      {
         curr[k] !== s[k] ? temp -- : null
         target[k] !== curr[k] ? final -- : null
      }
      
      if(final === 2) {a.push(target); break}
      else if(temp === 2) {curr = words[i]; a.push(curr);continue}

   }
   if(!a.includes(target)) return 0
   console.log(a,a.length)
   return a.length
}

const b ="aac"
const t ="yyy"
const w =["aaa", "aay", "ayy", "yay", "aya", "yyy"]	
// const w =["hot", "dot", "dog", "lot", "log", "cog"]	

solution(b,t,w)