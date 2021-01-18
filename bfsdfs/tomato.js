

let input = `6 4
1 -1 0 0 0 0
0 -1 0 0 0 0
0 0 0 0 -1 0
0 0 0 0 -1 1`.toString().split('\n')

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
const bfs = (s,c) =>
{
    let q = [s]
    visit[s[0]][s[1]] = 1
    while(q.length)
    {
        let depth = 0
        let [y,x] = q.shift()
        for(const delta of mv)
        {
            depth+=1
            let [dx,dy] = delta
            let [mx, my] = [dx+x, dy+y]
            if(mx < 0 || my < 0 || mx> M-1 || my > N-1) continue
            if(board[my][mx] < 0) continue
            if(visit[my][mx] > 0) continue
            q.push([my,mx])
            visit[my][mx] = visit[y][x] + 1
            count = visit[my][x]
            console.log(visit)

        }
        
    }
    
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
        // bfs([y,x],count)
    }
    }
}

// for(let _ = 0; _ < all.length; _ ++)
// {
// console.log((count+1)/2, al.length, count)
// }
// let funcArry = Array(al.length).fill(bfs())
// Promise.all(al.map( e => bfs(e,count)))
// let ex = [bfs(al[0],count),bfs(al[1],count)]
// console.log(al)
// 모두 익으면 0 출력 

// 모두 익지 못하면 -1 출력

setTimeout(() => {
    bfs(al[0],count)
  }, 0);
  setTimeout(() => {
    bfs(al[1],count)
  }, 0);