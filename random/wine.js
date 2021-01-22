input = `6
6
10
13
9
8
1`.toString().trim().split('\n').map(_ => Number(_))

const n = input.shift()
let wines = [...input]
let memo = Array(n + 1).fill(-1) // n일차의 최대값
// memo[0] = wines[0]
let max = 0
console.table(wines)




// const jequi = (now,all,flag,i) =>
// {
//     let visit = Array(3).fill(-1)
//     if( now > wines.length)
//     {
//         console.log('now',now)
//         return
//     }

//     let arr = []
//     const go = (a, i) =>
//     {
//         // console.log( a, i)
//         if( a.length == 2) 
//         {
//             console.log(a)
//             if(a[1]-a[0] === 2) //건너뜀
//             {
//                 console.log(now,i,'건너',a)

//                 flag = true
//                 // now = now + 1
//                 visit = Array(3).fill(-1)
//                 a.map( idx => memo[idx] = a.reduce((a,b) => wines[a]+wines[b]))
//                 now =  Math.max.apply(null,a)
//                 a.map( e => all.push(wines[e]))
//                 jequi(now + 1,all,flag,i+1)

                

//             }
//             else if(a[1]-a[0] === 1)
//             {
//                 console.log(now,i,'두간뒤',a)
//                 flag = false
//                 // now = now + 2
//                 visit = Array(3).fill(-1)
//                 a.map( idx => memo[idx] = a.reduce((a,b) => wines[a]+wines[b]))
//                 a.map( e => all.push(wines[e]))

//                 jequi(now + 2,all,flag,i+1)



//             }
//         }
//         for(let k = Math.max.apply(null,visit); k <3; k++)
//         {
//             if(visit[k] < 0)
//             {
//                 // console.log(now)
//                 visit[k] = k
//                 // a.push(k+now)
//                 a.push(wines[k+now])
//                 go(a,i+1)
//                 a.pop()
//                 visit[k] = -1
//             }
//         }
//         // return a
//     }
//     // let add = 
//     go([],0)
//     console.table('memo',memo)
//     // if(add[1] - add[0] === 2) //건너뛰었다
//     // {
//     //     flag = true
//     //     console.log(add)
//     // }
    
// }
// jequi(0,[],true,0)
console.log(max)