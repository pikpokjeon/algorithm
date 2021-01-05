//https://www.acmicpc.net/problem/10870

const fibo = (n) =>
{
    if(n === 0) return 0
    if(n < 2) return 1
    return fibo(n-1) + fibo(n-2)    
}

console.log(fibo(17))