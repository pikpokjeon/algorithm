let answer = 0;

function solution(n, t) {
    let memo = Array(n.length).fill(-1)
    jequi(n,0,t,[],memo)



    return answer;
}

const jequi = (nums,i,target,arr,memo) => 
{

    if(arr.length === nums.length)
    {
        const sums = arr.reduce((a,b) => a+b)
        if(sums === target) 
        {
            answer += 1
            console.log(arr,answer)

        }
    }

        for(let j = 0; j < nums.length; j++)
        {
            if(memo[j] < 0)
            {
                memo[j] = nums[j]
                arr.push(nums[j])
                jequi(nums,i+1,target,arr,memo)
                arr.pop()
                arr.push(-(nums[j]))
                jequi(nums,i+1,target,arr,memo)
                arr.pop()
                memo[j] = -1

            }
        }
}


const numbers =[1, 2, 6, 7, 4]
const target = 10
solution(numbers,target)