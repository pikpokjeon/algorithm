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

let num = Number(input1[0])
input1.shift()
let t =[]
let p =[]
let input = input1.map(e => e.split(' '))
input.map( e => {
    t.push(Number(e[0]));
    p.push(Number(e[1]));
})
let n = Array.from(Array(num).keys()).map(e => e+1)
let s = new Array(num).fill(-1)
console.log(n)

const bb = (num,i,s) => 
{
    let sum = 0
    for(let k= 1; k <= num; k++)
    {
        sum += s[i+k]
        console.log(sum,s)
    }
    return sum
}

const goin = (num,t,s,p,bb) => 
{
    let day = 0
    
 
    console.log('start')
    
    for(let i=num-1; i > -1; i --)
    {
        let lastday = i + t[i]
        let pp = p[i+1] ? p[i]+p[i+1] : p[i]
        let ss = s[i+1] ? s[i+1] : s[i]
        if(t[num-1] === 1)
        {
            s[i] = p[i]
        }
        else if(pp > s[i+1])
        {
            s[i] += p
        }
        else if(pp < s[])
        
      
    }
}


goin(num,t,s,p,bb)
console.log(s)