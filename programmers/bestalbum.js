



function solution(genres, plays) {

   //속한 노래가 많이 재생된 장르먼저,
   //장르내 많이 재생된 노래 먼저
   // 재생횟수가 같으면 숫자 순서별로
   let obj = {}
   const n = genres.length
   for(let i = 0; i <n; i ++)
   {
      if(!obj[genres[i]]) obj[genres[i]] = [0,]
      obj[genres[i]].push(plays[i])
      obj[genres[i]][0] += plays[i]

   }
   let genRank = []
   for(const [key,val] of Object.entries(obj))
   {
      genRank.push(val[0])
   }
   genRank = genRank.sort((a,b) => b-a)
   let list = []

   // genRank.forEach( e => {
   //    if( e === val[0]) list.push(key)
   //    console.log(e)
   // })
   let a =Object.entries(obj)
   genRank.forEach( e => {
      for(let i = 0; i <a.length; i++)
      {

         if(a[i][1][0] === e)
         {list.push(a[i][0])
         delete ( a[i][1][0])
            a[i][1].sort((a,b) => b-a)
      }
      }
      console.log(a)

   })



   // const topPlayed = plays.indexOf(Math.max.apply(null, plays))
   let answer = [];

   for(let i = 0; i < list.length; i++)
   {
      for(let k = 0; k < 2; k++)
      {
         if (!obj[list[i]][k]) continue
         const a = obj[list[i]][k]
         // console.log(a)
         const idx = plays.indexOf(a)
         answer.push(idx)
         delete(plays[idx])

      }
   }
   // console.log(obj,genRank,list)

   console.log(answer)
   return answer;
}


const [a,b] = [["classic", "pop", "classic", "classic", "pop","classic"],[500, 2500, 150, 800, 2500,500]]
solution(a,b)
