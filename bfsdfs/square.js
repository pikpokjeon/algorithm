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
let board = Array(M).fill([]).map(e => [...new Array(N).fill(0)])
let visit = Array(M).fill([]).map(e => [...new Array(N).fill(0)])

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


for(let y = 0; y < M; y++)
{
    for(let x = 0; x < N; x++)
    {
        
        if(board[y][x] < 1 && visit[y][x] < 1)
        {

            {
                let q = [[y,x]]
                visit[y][x] = 1
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
                        visit[my][mx] = 1 //갈 수 있는 모든 지점에 대한 최단거리
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
