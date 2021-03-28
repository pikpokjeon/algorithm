// 문제 https://www.acmicpc.net/problem/1053
// 팰린드롬이란, 앞에서부터 읽었을 때와, 뒤에서부터 읽었을 때가 같은 문자열이다.


// 모든 문자열이 팰린드롬이 아니기 때문에 다음과 같은 4가지 연산으로 보통 문자열을 팰린드롬으로 만든다.

// 문자열의 어떤 위치에 어떤 문자를 삽입 (시작과 끝도 가능)
// 어떤 위치에 있는 문자를 삭제
// 어떤 위치에 있는 문자를 교환
// 서로 다른 문자를 교환
// 1~3번 연산은 마음껏 사용할 수 있지만, 마지막 연산은 많아야 한 번 사용할 수 있다.

// 문자열이 주어졌을 때, 팰린드롬으로 만들기 위해 필요한 연산의 최솟값을 출력하는 프로그램을 작성하시오.

let input = 'nodong'.trim().split('')
const len = input.length
const half = Math.floor(len/2)
let memo = Array(len-1).fill(-1)
const jequi = (num,i,add,arry,count,diff,hc) =>
{
    if(i > hc)
    {
        memo[num] = count
        return
    }
    if(arry[num-i] === arry[num+i+add])
    {
        return jequi(num,i+1,add,arry,count,diff,hc)
    }
    diff.push([arry[num-i],arry[num+i+add]])
    return jequi(num,i+1,add,arry,count+1,diff,hc)
}
for(let i = 1; i<input.length;i++)
{
    if(input[i-1]=== input[i+1])
    {
        jequi(i,1,0,input,0,[],input.length-1)
    }
    else if (input[i]  === input[i-1])
    {
        jequi(i,0,1,input,0,[],input.length-1)
    }
}
memo = memo.filter(e => e> 0)
console.log(Math.min.apply(null,memo))


// console.log(diffArry)
// const sortArry = diffArry.map(e=> e.sort()).reduce((acc,cur,idx)=>
// {

//     const i = acc[0].length -1
//     if(idx === 0)
//     {
//     acc[0].push(cur)
//     return acc
//     }
//     if( cur[0] === acc[0][i][0] || cur[1] === acc[0][i][1])
//     {
//         acc[2] +=1 
//         return acc
//     }
//     acc[0].push(cur)
//     acc[1] +=1
//     return acc

// },[[],0,0])
// console.log(sortArry)
// const flatDiff = diffArry.flatMap(e => e).sort()
// console.log(flatDiff)