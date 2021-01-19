

let input = `2 2
1 -1
-1 1`.toString().split('\n')

// 가로 M / 세로 N

const [M,N] = input.shift().split(' ').map(e => Number(e))
let board = input.map( e=> e.split(' ').map(e => Number(e)))
let visit = Array(N).fill([]).map( _ => [...new Array(M).fill(-1)])
// 익음 - 1. 덜익음 - 0, 없음 - -1,

// 익음 주변에 덜익음 토마토는 상하좌우 방향으로 한칸씩 움직이며 익게 만든다 -> 날짜를 입력
let day = 0
// 최소 며칠이 지나야 다 익는가
// 상하 좌우 움직이는 배열
const mv = [[0,1],[0,-1],[1,0],[-1,0]]
// 먼저 1을 찾아서 동시에 bfs를 돌린다
// 0의 위치를 찾아서 bfs를 돌리지만, 사방이 막혀있는 경우 바로 -1 출력
// 익지 못하는 토마토를 감지한다
let isTomatoIsolated = false
let isTomatoAllFresh = false
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
            if(mx < 0 || my < 0 || mx> M-1 || my > N-1) continue
            if(visit[my][mx] > 0) continue
            q.push([my,mx])
            visit[my][mx] = visit[y][x] + 1
            count = visit[my][x]

        }
        
    }
    visit.map(e => console.log(e.join(' ')))
    
}
let al = []
let count = 0
let tomato = 0
for(let y = 0; y < N; y++)
{
    count+=1
    for(let x =0; x < M; x++)
    {
        if(board[y][x] === 1 && visit[y][x] < 1)
        {
           al.push([y,x]) 
        tomato +=1
    }
    }
}

bfs(al)
let y = visit.map( e => [...e].join('')).join('')
if (!y.includes(0))
{
    isTomatoAllFresh = true
    console.log(0)


}
let asw = visit.map( e => e.map( e => {if(e > day) day = e}))
if(!isTomatoIsolated)
{
    console.log(day-1)

}

// 모두 익으면 0 출력 

// 모두 익지 못하면 -1 출력

// setTimeout(() => {
//     bfs(al[0],count)
//   }, 0);
//   setTimeout(() => {
//     bfs(al[1],count)
//   }, 0);



// console.log(`\\    /\\
//  )  ( ')
// (  /  )
//  \\(__)|`)