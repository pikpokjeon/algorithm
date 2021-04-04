

function solution(n) {
    let answer = []
    let memo = Array.from(new Array(n).fill([]).map((_,idx) => [...Array(idx+1)].fill(-1)))
    const jequi = (i,idx,num,arr,a,b,k) =>
    {
        if(i > n-1)return console.table(memo)
         b = a + (n - idx  -2 )*2+ memo[n-1].length - 3 +1
        const len = memo[i].length - 1
        console.log('idx',idx,'num',num,'arr',arr)
        console.log('a',a,'b',b)
        console.table(memo)
        console.log('---------------------------')

        // memo[]
        const gap = memo[i].length - 2
        memo[idx][0]= num

        if(gap === 0 && idx > 0)
        {
            memo[idx][1] = a
        
        return jequi(i+1,idx+1,num+1,arr,a,b+1,k)
        }
        else if(gap > 0)
        {
            memo[idx][1] = a +k
            memo[idx][len] = a -k
        }
            for(let i = 0; i<= len; i++)
            {
                if(memo[idx][i] < 0)
                {
                    console.log('ssssss')
                    memo[idx][i] = b
                    b+=1
                }
                if(idx === n -1)
                {
                    memo[idx][i] = num
                    num+=1
                }


            }
        
        return jequi(i+1,idx+1,num+1,arr,a,b,k+1)
      
    }
    //메모 2차원 배열을 만든다, n개, 각 순서별로  n개의 원소가 있다

    // n -1 줄까지 맨 첫번째 값에서 다음 줄 마지막 원소 값의 차이는 2씩 난다
    // for(let i = 0; i <n; i ++)
    // {
        const a =  n + (n - 1) + (n - 2) 
        jequi(0,0,1,[],a,0,0)
    // }
// 
    return answer
}

const test = [4,5,6]

test.forEach(n => solution(n))