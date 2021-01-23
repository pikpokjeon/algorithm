
const input =`6 4
1 -1 0 0 0 0
0 -1 0 0 0 0
0 0 0 0 -1 0
0 0 0 0 -1 1`.split('\n')


const [M, N] = input.shift().split(' ').map( e => Number(e))

const board = input.map( e => e.split(' ').map( i => Number(i)))
const delta = [[1,0],[0,1],[-1,0],[0,-1]]

const bfs = () =>
{
    // console.log(q)
    while(q.length)
    {
        let [x,y] = q.shift()

        for(let i =0; i<delta.length; i++)
        {
            let [dx,dy] = delta[i]
            let [nx,ny] = [x + dx, y + dy]

            if ( nx < 0 || nx >= N || ny < 0 || ny >= M) continue
            if (visit[nx][ny] === 0 && board[nx][ny] === 0 )
            {
                visit[nx][ny] = visit[x][y] + 1
                q.push([nx, ny])
            }
        }
    }
}

let q = []
let visit = Array(N).fill([]).map(_ => [...new Array(M).fill(0)])

for(let i = 0; i < N; i++)
{
    for(let k = 0; k < M; k++)
    { 
        if (board[i][k] === -1)
        {
            // console.log('before', visit)
            visit[i][k] = -1
            // console.log('after', visit)
        }
        else if (board[i][k] === 1)
        {
            visit[i][k] = 1
            
            for(let j =0; j<delta.length; j++)
            { 
                let [dx,dy] = delta[j]
                let [nx,ny] = [i + dx, k + dy]
                if ( nx < 0 || nx >= N || ny < 0 || ny >= M) continue
                if ( board[nx][ny] === 0 && visit[nx][ny] === 0)
                    {
                        q.push([nx, ny])
                        visit[nx][ny] = 1
                    }
            }
        }
    }

}

if (q.length < 1)
{
    //모두 익어있음
    console.log(0)
}
else
{
    bfs()
    let indicator = false
    if( !indicator)
    {
        for(let i = 0; i < N ; i++)
        {
            for(let k = 0; k < M ; k++)
            {
                if( !visit[i][k])
                {
                    indicator = true
                    break
                }
            }
            
        }
    }
    if (indicator)
    {
        console.log(-1)
    }
    else
    {
        let answer = -1
        for(let i = 0; i < N ; i++)
        {
            for(let k = 0; k < M ; k++)
            {
                if (visit[i][k] > answer) {
                    answer = visit[i][k]
                }
            }
        }
        console.log(answer)
    }
}