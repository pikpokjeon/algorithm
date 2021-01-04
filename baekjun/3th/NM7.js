const input =
    `4 2
9 8 7 1`.split('\n').map(e => e.split(' '))

    let [given,nums] = [input[0],input[1].sort((a,b) => a-b)]
    let [n,m] = given.map(e => Number(e))
    
    let a = new Array(n).fill(0)
    let answer = []
    const back = (arr) => 
    {
        
        if(arr.length === m )
        {
            {
                answer.push(arr.join(' '))
                return
            }
        }
        for(let i = 0; i < n  ; i++)
        {
            if(!a[i])
            {
                a[i] = 1
                arr.push(nums[i])
                back(arr)
                arr.pop()
                a[i] = 0
    
    
            }
            else if(nums[i])
            {
                arr.push(nums[i])
                back(arr)
                arr.pop()
            }
    
        }
    
    
    
        
    }
    
    back([])
    console.log(answer.join('\n'))

