// 랜선 자르기 이분탐색으로 풀기
// https://www.acmicpc.net/problem/1654

// 필요한 개수 만큼 나누어지는 최소 길이를 구하면 된다.

let input = `4 11
802
743
457
539`.toString().split('\n')

const [k, n] = input.shift().split(' ').map(e => Number(e))
const cables = input.map(e => Number(e)).sort()


//모든 케이블을 한 길이만큼 나누었을 때.  n개 거나 더 개수가 더 많아도 된다.

const sums = cables.reduce((a,b) => a+b)
const least = sums/n


const bs = (arr,maxNum) =>
{
   let start = 0, end = maxNum
  
   
}

bs(cables,least)

// console.log(sums/11)