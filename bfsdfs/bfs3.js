input = `4 6
101111
101010
101011
111011`.split('\n')
let [N,M] = input.shift().split(' ').map(e => Number(e))
const board = input.map(e => e.split('').map(e => Number(e)))
let start = [0,0]
let goal = [N-1,M-1]
const mv = [[0,1],[0,-1],[1,0],[-1,0]]



let visit = Array(N).fill([]).map(e => [...new Array(M).fill(0)])

const bfs = (start) => 
{
    let q = [start]
    visit[start[0]][start[1]] = 1
    let depth = 0
    while (q.length)
    {
        let [y,x] = q.shift()
        depth += 1
        for (const delta of mv)
        {
            let [dy, dx] = delta
            let [my, mx] = [dy+y, dx+x]
            if ( my < 0 || mx < 0 || my > N -1 || mx > M -1) continue
            if ( visit[my][mx] > 0 ) continue
            if ( board[my][mx] === 0) continue
            visit[my][mx] = visit[y][x] + 1 // 갈 수 있는 모든 지점에 대한 최단거리

            q.push([my,mx])
        }
    }

        console.log(visit[N-1][M-1],'찾았다')
    
} 

bfs(start)
