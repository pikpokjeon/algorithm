const input =
    `4 2
9 8 7 1`.split('\n').map(e => e.split(' '))

    let [given,nums] = [input[0],input[1].sort((a,b) => a-b)]
    let [n,m] = given.map(e => Number(e))
    console.log(nums)
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
        for(let i = Math.max.apply(null, a); i < n ; i++)
        {
            if(arr.length < m-1 !== 0)
            {
                
                // a[i] = i
                arr.push(nums[i])
                back(arr)
                arr.pop()
                a[i] = 0
        
    
            }
            else if(!a[i] && i !== 0)
            {
                a[i] = nums[i]
                arr.push(nums[i])
                back(arr)
                arr.pop()
                a[i] = 0
                // console.log(arr)
                // console.log(a)
            
            }
            console.log(a[i])
            console.log(arr)
            console.log(a)
    
        }
    
    
    
        
    }
    
    back([])
    console.log(answer.join('\n'))

