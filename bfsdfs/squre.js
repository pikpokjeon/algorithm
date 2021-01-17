let input = `5 7 3
0 2 4 4
1 1 2 5
4 0 6 2`.toString().split('\n')
const mv = [[0,1],[0,-1],[1,0],[-1,0]]
let [M,N,C] = input.shift().split(' ').map(e => Number(e))
let link = input.map(e => e.split(' ').map(e => Number(e)))
let edges = [...link]
let board = Array(M).fill([]).map(e => [...new Array(N).fill(0)])
let visit = Array(M).fill([]).map(e => [...new Array(N).fill(0)])
let answer = []
for(let _ = 0; _<edges.length; _++)
{
    let width = edges[_][2] - edges[_][0] // 직사각형의 넓이
    let height = edges[_][3] - edges[_][1] // 직사각형의 높이 
    for (let i=0;i< height; ++i){
        for (let j=0; j< width; ++j) {
            board[M - edges[_][3] + i][edges[_][0] + j] = 1
        }
    }             
}
const bfs = (start, visit) =>
{
    let q = [start]
    let _visit = [...visit]
    _visit[start[0]][start[1]] = 1
    let count = 1
    while (q.length)
    {
        let [y,x] = q.shift()
        for (const delta of mv)
        {
            let [dy, dx] = delta
            let [my, mx] = [dy+y, dx+x]
            if ( my < 0 || mx < 0 || my > M -1 || mx > N -1) continue
            if ( _visit[my][mx] > 0 ) continue
            if ( board[my][mx] === 1) continue
            _visit[my][mx] = _visit[y][x] + 1
            count++
            q.push([my,mx])
        }
    }
    answer.push(count)
    return _visit
}
for(let y = 0; y < M; y++)
{
    for(let x = 0; x < N; x++)
    {
        
        if(board[y][x] < 1 && visit[y][x] < 1)
        {
            visit = bfs([y,x], visit)
        }
    }
}
console.log(answer.length)
console.log(answer.sort((a,b) => a-b).join(' '))