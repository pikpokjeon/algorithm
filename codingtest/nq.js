

let M = 4

//앤퀸이 놓인자리
let visit = Array(M+1).fill(-1)



const visitArry = (arr, i,n) =>
{
    if( n+1 <= M && n-1 > 0)
    {
        arr[n] = n
        arr[Math.min(M,n+i)] = Math.min(M,n+i)
        arr[Math.min(M,n+i-1)] = -1
        arr[Math.max(1,n-i)] = Math.max(1,n-i)
        arr[Math.max(1,n-i+1)] = -1
        console.log('\n')
        console.log(n,'번에 퀸이 있으면-----',i,'------')
        console.table(arr)

    }
    return arr
}
let k = 0
const go = (n,visit,arr,count) =>
{
    // console.log(n)
    if(arr.length >= M)
    {
        count +=1

        // console.log(arr,'end',count)
        
        return
    }
    
    let check = Array(M+1).fill(-1)
    for(let k = 1; k <= M; k++)
    {

        let v = visitArry(check,k,n+1)
        visit = v
        if(visit[k] < 0)
        {
            console.log(n,count,'Possible Number ------:', k)
            if(v[k] < 0)
            {
                console.log('Entered!')
                
                visit[k] = v[k]
                arr.push(k)
                // console.log('arr:',arr)

                visitArry(v,k,n+1)
                visit = v
                go(n+1,v,arr,count)
            }
        }
    }
    // console.table(arr)
    return arr
}

// 시작지점을 넣는다 (첫번째 퀸의 자리)

for( let i = 1; i <= M; i++)
{
    go(i,visit,[],0)
}

// 해당지점에서 놓일 수 없는 곳을 표시한다 (제한배열)

// 제한배열에 포함하지 않은 곳에서 반복문을 시작.해서 하나씩 놓는다

// 첫째 앤퀸이 놓인 자리 + - 1씩 한 곳들을 제한 배열에 갱신해준다

// 두번째 퀸이 놓인 자리에서 다음 턴에서 놓일 수 없는 곳을 표시하고, 첫번째 퀸제한자리도 갱신

// 반복하여, 배열에 n개의 퀸들이 모두 놓이면 카운트를 1 세고, 

// 첫째 앤퀸 자리를 옮겨서 다시 탐색





// const go = (count,arr,visit) =>
// {
//     if(arr.length === n )
//     {
//         console.log(arr,'!!!')
//         return
//     }
//     for(let i = 0; i < n; i ++)
//     {
//         console.log(visit)
//         // let flag = arr.indexOf(i) < 0
//         // if(visit[i] < 0 )
//         // {
//             console.log(i)
//             if(visit.indexOf(i)< 0)
//             {   visit[i] = i
//                 visit[i+1] = i+1
//                 visit[Math.max(0,i-1)] = i-1
//                 arr.push(i)
//                 go(i+1,arr,visit)
//                 arr.pop()
//             }
//             // visit[i] = -1

            

//         // }
//     }
// }


// go(0,[],visit)

// const go = (a ,now, arr,visit) =>
// {
//     console.log(arr)
//     if(arr.length === 30) 
//     {
//         console.log(arr,'-----done')

//     }
//     arr.push(now)

//     arr.push(Math.max(1,now-1))
    
//     arr.push(now+1)
//     for(let i = 1; i <= n+1; i++)
//     {
//         if(visit[i] < 0)
//         {
//             console.log(i)
//             visit[i] = i
//             go(a,i,arr,visit)
//         }
//     }

// }
// const a = (num,arr) =>
// {
//     if(arr.length > 10 )return
//     for(let i = 1; i <= n; i++ )
//     {
//         if (arr.indexOf(i) < 0)
//         {
//             arr.push(i)
//             v(arr,i)

//         }
//     }
//     console.log(num,'result', arr)
//     return arr
// }

// const v = (box,num) =>
// {
//     if( num > n) return
//     box.push(num+1)
//     box.push(Math.max(1,num-1))
    
//     return box
// }
// let box = [4,1,5]



// for(let i = 0; i< box.length; i++){
//     a(box[i],box)
// }
// go(0,4,[],visit)