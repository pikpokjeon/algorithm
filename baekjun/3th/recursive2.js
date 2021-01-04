//https://www.acmicpc.net/problem/14501

const input1 =
    `10
1 1
1 2
1 3
1 4
1 5
1 6
1 7
1 8
1 9
1 10`.split('\n')


let n = Number(input1[0])
input1.shift()
let t =[]
let p =[]
let input = input1.map(e => e.split(' '))
input.map( e => {
    t.push(Number(e[0]));
    p.push(Number(e[1]));
})
let arr = Array.from(Array(n).keys()).map(e => e+1)
let  obj= {}
// console.log(memo)

console.log(arr)
let used = new Array(n).fill(0)
let maxmoney = 0
// for(let i = n; i<= n; i--)
// {
//     if(arr[i]+t[i] > n)
//     {
//         t.pop()
//         arr.pop()
//     }
// }

const pi = (day,d,sum,price) => 
{
    if(sum > n) return

    for(let i = 0; i < arr.length -2; i++)
    {
        day[i+t[i]] = price  + p[sum]
        sum += t[i]
        price = price + p[i]
        d += t[i]
        console.log(t[i])
        console.log(day,sum,price,d)

    }
    if(sum > n) return

    pi(day,d,sum,price)

    

}
// let a ={}
// a[3] =2
// console.log(Object.keys(a).length)
pi({},0,0,0)
// console.log(n,arr,p)
const go = (n,money,day) =>
{

    // for (let i in t) {
    //     memo[i] = 0
    // }
}

go(0,1,0)
// console.log(used)
// console.log(maxmoney)

