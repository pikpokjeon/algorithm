

let input = `6 4
0 -1 0 0 0 0
-1 0 0 0 0 0
0 0 0 0 1 -1
0 0 0 0 -1 0`.toString().split('\n')

// 가로 M / 세로 N

const [M,N] = input.shift().split(' ').map(e => Number(e))
let board = input.map( e=> e.split(' ').map(e => Number(e)))
let visit = Array(N).fill([]).map( _ => [...new Array(M).fill(-1)])
// 익음 - 1. 덜익음 - 0, 없음 - -1,

// 익음 주변에 덜익음 토마토는 상하좌우 방향으로 한칸씩 움직이며 익게 만든다 -> 날짜를 입력
// 최소 며칠이 지나야 다 익는가
// 상하 좌우 움직이는 배열
const mv = [[0,1],[0,-1],[1,0],[-1,0]]
// 먼저 1을 찾아서 동시에 bfs를 돌린다
// 0의 위치를 찾아서 bfs를 돌리지만, 사방이 막혀있는 경우 바로 -1 출력
// 익지 못하는 토마토를 감지한다
let answer = -1
const bfs = (s) =>
{
    let q = [...s]
    for (const c of s) {
        let [ty, tx] = c
        visit[ty][tx] = 1
    }
    while(q.length)
    {
        let [y,x] = q.shift()
        for(const delta of mv)
        {
            let [dx,dy] = delta
            let [mx, my] = [dx+x, dy+y]
            // 보드 밖을 나서지 않는다
            if(mx < 0 || my < 0 || mx> M-1 || my > N-1) continue
            // 이미 방문한 곳은 가지않는다
            if(visit[my][mx] > 0) continue
            // -1이면 이동하지 않는다
            if(board[my][mx] === -1) continue
            q.push([my,mx])
            // 처음 시작 위치에서 1을 더해가며 하루를 세서 배열에 저장한다.
            visit[my][mx] = visit[y][x] + 1

        }
        
    }
    // 토마토가 익는 순서를 로깅
    visit.map(e => console.log(e.join(' ')))
    
}
// 모든 1이 있는 지점들을 저장한다
let al = []
for(let y = 0; y < N; y++)
{
    for(let x =0; x < M; x++)
    {
        // 보드에 1인 지점 (출발지)을 찾는다
        if(board[y][x] === 1 )
        {
            // 모든 시작지점을 저장한다
           al.push([y,x]) 
        }

        // 0 만 떨어져 있는 경우를 찾기위해
        if(board[y][x] === 0)
        {
            visit[y][x] = visit[y][x] + 1

        }
    }
}
// 한자원에 여러 함수를 적용해서 변화를 만들어 낼 수 없다
// 시작지점을 함수에 넘겨준다. 동시에 시작해야해서..(하루가 지날 때 마다 동시에 기록)
bfs(al)
// 방문한 배열들의 일수 구하기
// 아래 코드는. includes 사용해서 덜익은 토마토를 찾을 때. 
// 10이 있는경우에도 적용이 되어 사용할 수 없다
// let y = visit.map( e => [...e].join('')).join('')

// 2차원 배열을 1차원으로 바꿔서 원소 탐색에 사용
let y = visit.flatMap( e => e)
// 방문한 일수 중에 가장 큰 숫자를 찾는다
let maxcount = Math.max.apply(null,visit.flatMap(e => e))
let isZero = false
y.map(e => { if( e === 0) isZero = true})
// 0 이 하나라도 있으면 전부 익지 못했다는 뜻이다.
if (isZero)
{
    answer = -1
}
else if (maxcount === 1 || maxcount === -1)
{
    answer = maxcount === 1 ? 0 : -1
}
else if ( maxcount > 1)
{
    answer = maxcount -1
}
console.log(answer)
