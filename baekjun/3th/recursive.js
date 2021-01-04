//https://www.acmicpc.net/problem/14501

const input1 =
    `10
5 50
4 40
3 30
2 20
1 10
1 10
2 20
3 30
4 40
5 50`.split('\n')


let n = Number(input1[0])
input1.shift()
let t =[]
let p =[]
let input = input1.map(e => e.split(' '))
input.map( e => {
    t.push(Number(e[0]));
    p.push(Number(e[1]));
})

let maxmoney = 0
const go = (money,day) =>
{
    if(maxmoney < money) maxmoney = money
    
    if(n === day) return
    else if(n < day + t[day]) 
    {
        go(money+0, day+1)
    }
    if(n >= day + t[day])
    {
        go(money + p[day], day + t[day])
    }

    if(n < day) return
    go(money+0, day+1)
    
}

go(0,0)
console.log(maxmoney)