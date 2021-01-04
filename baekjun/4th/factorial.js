// 문제
// 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 정수 N(0 ≤ N ≤ 12)가 주어진다.

// 출력
// 첫째 줄에 N!을 출력한다.

let input = 10

const arr = Array.from(Array(input).keys()).map(e => e+1).reduce((ac,curr) => ac*curr )

// console.log(arr)

const arr2 = Array.from(Array(input).keys()).map(e => Number(e+1))
let ac = 1
const gogo = (n) =>
{
        if(n < 2) return n
        return gogo(n-1) * n
    

}
// gogo(n) 이 factorial(n)을 리턴하는 재귀함수로 구현하세요,
gogo(1)
console.log(gogo(input))
// console.log(ac)

//피보나치수열

const goto = (n) =>
{
    if (n < 3) return 1
    return goto(n-1) + goto(n-2)
}
console.log(goto(30))