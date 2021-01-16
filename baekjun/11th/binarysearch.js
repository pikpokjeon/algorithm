

let input = `5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10`.toString().split('\n')

const N = Number(input.shift())
const scard = input.shift().split(' ').map(e => Number(e)).sort((a,b) => a - b)
const M = Number(input[0])
const fcard = input[1].split(' ').map(e => Number(e))

// console.log(N,scard,M,fcard)
// # 이분탐색 재귀 함수

let answer = ''
let target = 0

function binary_search (left,right) 
{
    // console.log(scard[right])
    // if (target === scard[right]) {
    //     answer += '1 '
    //     return
    // }
    let mid = Math.floor((left+ right)/2) 
    if(left === mid) {
        if (target === scard[left] || target === scard[right]) {
            answer += '1 '
        }
        else {
            answer += '0 '
        }
        return
    }
    else 
    {
        
        if(scard[mid] > target) binary_search(left,mid)
        else binary_search(mid,right)
        
    }
}
for (const c in fcard) {
    target = fcard[c]
    binary_search(0,scard.length - 1 )    
}
console.log(answer)
// # 상근이가 가지고 있는 숫자 카드의 개수 N
// #둘째 줄에는 숫자 카드에 적혀있는 정수

// # . 넷째 줄에는 상근이가 가지고 있는 숫자 카드인지 아닌지를 구해야 할 M개의 정수

// 첫째 줄에 입력으로 주어진 M개의 수에 대해서, 각 수가 적힌 숫자 카드를 상근이가 가지고 있으면 1을, 아니면 0을 공백으로 구분해 출력한다.

