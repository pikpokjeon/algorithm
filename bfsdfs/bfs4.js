// https://www.acmicpc.net/problem/1012
// 유기농 배추
let input = `2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5`.toString().split('\n')


const mv = [[0,1],[0,-1],[1,0],[-1,0]]
const TC = Number(input.shift())
for (const tc of Array(TC)) {
    let [M, N, C] = input.shift().split(' ').map(_ => Number(_))
    let board = Array(N).fill([]).map( _ => [...new Array(M).fill(0)])
    for( let t=0; t<C; t++)
    {   
        let [x, y] = input.shift().split(' ').map(_ => Number(_))
        board[y][x] = 1
    }
    let count = 0
    let visit = Array(N).fill([]).map( _ => [...new Array(M).fill(0)])
    const bfs = (s) => 
    {
        let q = [s]
        visit[s[0]][s[1]] = 1
        while (q.length)
        {
            let [y,x] = q.shift()
            for(const delta of mv)
            {
                let [dx,dy] = delta
                let [mx,my] = [dx+x,dy+y]
                if(my < 0 || mx < 0 || mx > M-1 || my > N-1) continue
                if(board[my][mx] < 1) continue
                if(visit[my][mx] > 0) continue
                q.push([my, mx])
                visit[my][mx] = 1
            }
        }
        // visit.map(v => console.log(v.join(' ')))
        count++

    }
    
    for(let y = 0; y < N; y++)
    {
        for(let x =0; x < M; x++)
        {
            if(board[y][x] === 1 && visit[y][x] < 1)
            {
                bfs([y,x])
            }
        }
    }
    console.log(count)
}
