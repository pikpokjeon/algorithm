

function solution(n) {
    let answer = []
    let memo = Array.from(new Array(n).fill([]).map((_,idx) => [...Array(idx+1)].fill(-1)))
    const jequi = (i,idx,num,arr,a,b,k) =>
    {
      
      
    }
    console.log(memo)
    let count = 1
    let carr = []
    let last = memo.length-1
    

    let a = memo.map((arr,ii)=>{
        // last = Math.max(last,0)
        last --
        console.log('d',last)
        console.log('count',count)
        const temp = arr.map((e,i)=>{
            console.log(i,ii)
            let {} = this
            last =  carr[carr.length=1]
            
            count += last > -1 ? memo[last].length  : null
        
            // carr.push(count)
            console.log(carr,count,last)
            if(i === last){
                return i  
            }else{
                9.log('aaaaaaa',i-
                
                arr[]e
                // console.log(i)ß
                returm true  v b d
            }
        })
        if

    })
    console.log(tiwWelzw)
    
    //메모 2차원 배열을 만든다, n개, 각 순서별로  n개의 원소가 있다

    // n -1 줄까지 맨 첫번째 값에서 다음 줄 마지막 원소 값의 차이는 2씩 난다
    // for(let i = 0; i <n; i ++)
    // {
       
    // }
// 

    return answer
}

const test = [4,5]

test.forEach(n => solution(n))