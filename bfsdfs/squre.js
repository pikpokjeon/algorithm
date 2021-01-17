let input = `5 7 3
0 2 4 4
1 1 2 5
4 0 6 2`.toString().split('\n')


const mv = [[0,1],[0,-1],[1,0],[-1,0]]
let [M,N,C] = input.shift().split(' ').map(e => Number(e))
let link = input.map(e => e.split(' ').map(e => Number(e)))
let start = [0,0]
let goal = [N-1,M-1]
let edges = Array(C).fill([])
for(let _ = 0; _<C; _++)
{
    let a = []
    for(let i = 0; i<2; i++ )
    {
        let t = []
        for(let k = 0; k<2; k++ )
        {
            t.push( link[_].shift())
        }
        a.push(t)

    }
    edges[_].push(a)

}
edges = edges.shift()
console.log(edges)
let board = Array(M+1).fill([]).map(e => [...new Array(N+1).fill(0)])
let visit = Array(M+1).fill([]).map(e => [...new Array(N+1).fill(0)])

for(let _ = 0; _<edges.length; _++)
{
    board[_]
    for(let y = edges[_][0][1]; y<= edges[_][1][1]; y++)
    {
        for(let x = edges[_][0][0]; x<= edges[_][1][0]; x++)
        {
            edges[_].push([y,x])
            board[y][x] = 1
            // console.log(y,x)
        }
    }
}
// let board = Array(N).fill([]).map(e => [...new Array(M).fill(0)])

let count = 1
for(let y = 0; y<=M; y++)
{
    for(let x = 0; x<=N; x++)
    {
        if(board[y][x] < 1 && visit[y][x] < 1)
        { count+=1
            
{
    let q = [[y,x]]
    visit[y][x] = count
    while (q.length)
    {
        let [y,x] = q.shift()
        for (const delta of mv)
        {
            let [dy, dx] = delta
            let [my, mx] = [dy+y, dx+x]
            if ( my < 0 || mx < 0 || my > N -2 || mx > M -1) continue
            if ( visit[my][mx] > 0 ) continue
            if ( board[my][mx] === 1) continue
            visit[my][mx] = count// 갈 수 있는 모든 지점에 대한 최단거리
            q.push([my,mx])
            console.log('----------------')
            console.log(visit.join('\n'))
        }
    }
    
} 
        }
    }
}
console.log('----------------')
console.log(visit.join('\n'))