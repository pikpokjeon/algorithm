

let M = 5

//앤퀸이 놓인자리
let visit = Array(M).fill(-1)



// const visitArry = (arr, i,n) =>
// {
//     if( n+1 <= M && n-1 > 0)
//     {
//         arr[n] = n
//         arr[Math.min(M,n+i)] = Math.min(M,n+i)
//         arr[Math.min(M,n+i-1)] = -1
//         arr[Math.max(1,n-i)] = Math.max(1,n-i)
//         arr[Math.max(1,n-i+1)] = -1
//         console.log('\n')
//         console.log(n,'번에 퀸이 있으면-----',i,'------')
//         console.table(arr)

//     }
//     return arr
// }
let count = 0
const go = (i,round,memo,nq,arr) =>
{
    // console.log('i: ',i,'round: ',round,'nq: ',nq,'arr: ',arr)
    // if(round === M - 1) return
    if(arr.length === M )
    {
        count += 1
        console.log(arr)
        return
    }
    let init = Array(M).fill(-1)
    if(nq[i] < 0 && memo[i] < 0 && arr.indexOf(i) < 0)
    {
        nq[i] = 1, arr.push(i)
        for(let j = 0; j < arr.length; j ++)
        {
            const [a,b] = [arr[j]-round, arr[j]+round]
            if(a > -1)memo[a] = 1
            if(b < M)memo[b] = 1
            // console.log('a: ',a,'b: ',b,'arr[j]:', arr[j],'round: ',round,'memo: ',memo)
            for(let k = 0; k < M; k++)
            {
                if(arr.indexOf(k) < 0 && memo[k] < 0 && nq[k]< 0)
                {
                    arr.push(k)
                    // console.log('i :',i,'k :',k)
                    // console.log(arr)
                    console.log('--------------------')
                    return go(i+1, round+1, init , nq, arr)
                }
            }
        }
    }
    return arr
}

// 시작지점을 넣는다 (첫번째 퀸의 자리)

for( let i = 0; i < M; i++)
{ 
    let memo = Array(M).fill(-1)
    let nq = Array(M).fill(-1)
    // 현재인덱스, 순회횟수, 매번체크방문, 
    go(i,0,memo,nq,[])
    continue
}
console.log(count)


// 해당지점에서 놓일 수 없는 곳을 표시한다 (제한배열)

// 제한배열에 포함하지 않은 곳에서 반복문을 시작.해서 하나씩 놓는다

// 첫째 앤퀸이 놓인 자리 + - 1씩 한 곳들을 제한 배열에 갱신해준다

// 두번째 퀸이 놓인 자리에서 다음 턴에서 놓일 수 없는 곳을 표시하고, 첫번째 퀸제한자리도 갱신

// 반복하여, 배열에 n개의 퀸들이 모두 놓이면 카운트를 1 세고, 

// 첫째 앤퀸 자리를 옮겨서 다시 탐색


