
let input = `5 4
3 1
3 2
4 3
5 3`.toString().split('\n').map(e => e.split(' ').map(e => Number(e)))

const [n,m] = input.shift()

let a = Array(n+1).fill([]).map(_ => [...new Array()])

for(const [A,B] of input)
{
    a[B].push(A)
}

for(let i = 0; i < a.length; i++)
{
    a[i].map( e => 
        {
            if(a[e].length > 0)
            {
                a[i].push(...a[e])
            }
        })
    a[i] = Array.from(new Set(a[i]))
}


const bfs = (s) =>
{
    let route = [s]
    let visit = Array(n+1).fill(-1)

    let q =[s]
    visit[s] = 1
    while(q.length)
    {
        let at = q.shift()
        for(const n of a[at])
        {
            if(visit[n] < 0)
            {
                visit[n] = 1
                q.push(n)
                route.push(n)

            }
        }
    }
    if(route.length > maxlen)
    {
        maxlen = route.length -1
    }
} 
let answer = []
let maxlen = 0
for(const [_,start] of input)
{
    bfs(start)
}
for(let z = 0; z < a.length; z ++)
{
    if(a[z].length === maxlen)
    {
        answer.push(z)
    }
}
console.log(answer.join(' '))