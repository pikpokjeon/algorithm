// 문제 https://www.acmicpc.net/problem/1053
// 팰린드롬이란, 앞에서부터 읽었을 때와, 뒤에서부터 읽었을 때가 같은 문자열이다.

// 모든 문자열이 팰린드롬이 아니기 때문에 다음과 같은 4가지 연산으로 보통 문자열을 팰린드롬으로 만든다.

// 문자열의 어떤 위치에 어떤 문자를 삽입 (시작과 끝도 가능)
// 어떤 위치에 있는 문자를 삭제
// 어떤 위치에 있는 문자를 교환
// 서로 다른 문자를 교환
// 1~3번 연산은 마음껏 사용할 수 있지만, 마지막 연산은 많아야 한 번 사용할 수 있다.

// 문자열이 주어졌을 때, 팰린드롬으로 만들기 위해 필요한 연산의 최솟값을 출력하는 프로그램을 작성하시오.

let input = 'ababacvabbab'.trim().split('')
const len = input.length
const half = Math.floor(len/2)
let memo = Array(len-1).fill(-1)
// console.log(memo)
const jequi = (i,add,arry,count,diff,hc) =>
{
    console.log(diff,arry[hc-i],arry[hc+i+add])
    console.log(memo)
    if(hc-i > 0 || i <= hc) 
    {
        if(arry[hc-i] === arry[hc+i+add])
        {
            
            [memo[hc-i],memo[hc+i+add]] = [1,1]
            return jequi(i+1,add,arry,count,diff,hc)
        }
        [memo[hc-i],memo[hc+i+add]] = [arry[hc-i],arry[hc+i+add]]
        diff.push([arry[hc-i],arry[hc+i+add]])
        return jequi(i+1,add,arry,count+1,diff,hc)
    }
    return diff
}
const diffArry = len%2 === 0? jequi(0,1,input,0,[],half-1) : jequi(1,1,input,0,[],half-1)
const sortArry = diffArry.map(e=> e.sort()).reduce((acc,cur,idx)=>
{
    const i = acc[0].length -1
    if(idx === 0)
    {
    acc[0].push(cur)
    return acc
    }
    if(cur[0] === acc[0][i][0] && cur[1] === acc[0][i][1])
    {
        acc[1] +=1 
        return acc
    }
    acc[0].push(cur)
    acc[1] +=1
    return acc

},[[],0])
console.log(sortArry[1])
// const flatDiff = diffArry.flatMap(e => e).sort()
// console.log(flatDiff)