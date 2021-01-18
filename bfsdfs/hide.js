const fs = require('fs')
let [N, K] = `10 25`.toString().split(' ').map(e => Number(e))

// 이동 배열을 만든다
// const mv = ['-1','+1','*2']
let visit = Array(100001).fill(-1)
let G = Array(K + 1).fill([])
let arr = []
let q = [N,]
let answer = 0
let count = 1
let what = 0
let flag = false
while (q.length) {

    // if (!visit[here]) {


    let here = q.shift()
    visit[here] = count
    console.log('here: ', here )
    if (here === K) 
    {
        console.log('count:', count)
        break
    }

    if(visit[here] < 1){
        console.log('ss')
    let temp = 0
    for(let i = 0; i < 3; i ++)
    {
        if( here%2 === 0 && i ==0)
        {
            temp = here * 2
        }
        else if ( i === 1 )
        {
            temp = here + 1
        }
        else 
        {
            temp = here - 1
        }
        console.log('temp',temp)
        if( temp >= 0 && temp <= K && visit[temp])
        {
            count +=1
            
            console.log('!!!')
            visit[temp] = count
            G[temp] = G[here] + 1
            console.log(G)
            q.push(temp)
        }
    
        // console.log(temp)

    }
}
}
// }
// console.log('visitphere',visit[here])
//     if(visit[here] > 0){
//         console.log('ee')
//         if (here === K) {
//             console.log(visit[here])
//             console.log('end:',here)
//             break
//         }
//         console.log('start')
//         console.log(2*here <= K && visit[2 * here] < 0)
//         console.log(here + 1 <= K && visit[here + 1] <0)
//         console.log(here - 1 <= K )
//         flag = false
//         if (2*here <= K ) {
//             visit[2 * here] = here+1

//             q.push(2 * here)
//             console.log('multiply:', q)
//             flag = true
//             count += 1
//         }
//         else if (here + 1 <= K ) {
//             console.log('plus!!!')
//             visit[here + 1] = here +1
//             q.push(here + 1)
//             flag = true
//             count += 1
//             console.log('plus:', q)

//         }
//         else if (here - 1 <= K ) {
//             visit[here - 1] = visit[here] + 1

//             q.push(here - 1)
//             console.log('minus:', q)

//             flag = true
//             count += 1
//         }


//         if (flag) answer += 1
        // console.log(answer,count)





//     }
// console.log(q)
// console.log(visit)

// }

// what = count


// // let G = Array.from(Array(17).keys()).map(e => e+1)
console.log('answer', count) 