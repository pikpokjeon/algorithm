input = `0 0 1 0 0 3
1 0 0 0 0 1
1 0 1 1 0 1
0 0 0 0 0 1
0 0 0 0 0 1
2 1 0 1 0 0`
let N = 6
const board = input.split('\n').map(e => e.split(' ').map(e => Number(e)))
let start;
let goal;

const mv = [[0,1],[0,-1],[1,0],[-1,0]]


for (let i = 0; i < N; i++)
{
    for (let j = 0; j < N ; j++ )
    {
        if(board[i][j] === 2) 
        {
            start = [i,j]
        }
        if(board[i][j] === 3)
        {
            goal = [i,j]
        } 
    }
}


let visit = Array(N).fill([]).map(e => [...new Array(N).fill(0)])

const bfs = (start) => 
{
    let q = [start]
    visit[start[0]][start[1]] = 1
    let depth = 0
    while (q.length)
    {
        console.log(q)
        let [y,x] = q.shift()
        depth += 1
        for (const delta of mv)
        {
            let [dy, dx] = delta
            let [my, mx] = [dy+y, dx+x]
            if ( my < 0 || mx < 0 || my > N -1 || mx > N -1) continue
            if ( visit[my][mx] > 0 ) continue
            if ( board[my][mx] === 1) continue
            q.push([my,mx])
            visit[my][mx] = visit[y][x] + 1
            console.log(visit)
        }
    }
} 

bfs(start)

const [gy,gx] = goal
if(visit[gy][gx]) console.log('도착')
console.log(visit[gy][gx]-1)