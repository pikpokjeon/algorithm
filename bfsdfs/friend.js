
let input = `5 5
1 3
1 4
4 5
4 3
3 2`.toString().split('\n').map(e=> e.split(' ').map(_ => Number(_)))

// 정점수 간선수
const [n,m] =input.shift()
let board = Array(n+1).fill([]).map(_ => [...new Array()])

// console.log(input,n,m)
// 간선 개수만큼 돈다
let all = Array(n+1).fill([]).map(_ => [...new Array()])
for(let i = 0; i < m; i++)
{
    let [a,b] = input[i]
    board[a].push(b)
    board[b].push(a)
}

for(const a of board)
{
    a.sort((a,b) => a-b)
}
// for(let i = 0; i < m; i++)
// {
//     if(board[i].length > 0)
//     {
//         board[i].map( k => {
//             board[i].push(board[k])
//         })
//     }
//     // board[i] = Array.from(new Set(board[i]))
// }
// console.log(board)

const bfs = (s) =>
{
    let route = [s]
    let visit = Array(n+1).fill(-1)
    let q = [s]
    let strr = `${s} `
    visit[s] = 1
    let count = 0
    while(q.length)
    {
        
        let at = q.shift()
        for(const to of board[at])
        {
            let curr = to
            if(visit[to] < 0)
            {

                strr += `${to} `
                visit[to] = 1
                q.push(to)
                route.push(to)
                count = 0

            }
            if(visit[to] > 0 )
            strr += `<${count}>`
            count +=1

        }
    }
    console.log(route,strr)
}

for(let person = 0; person<n+1; person++)
{
    bfs(person)
}