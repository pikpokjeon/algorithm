input = `0 0 1 0 0 3
1 0 0 0 0 1
1 0 1 1 0 1
0 0 0 0 0 1
0 0 0 0 0 1
2 1 0 1 0 0`
const N = 6
const board = input.split('\n').map(e => e.split(' ').map(e => Number(e)))
let start;
let goal;

const mv = [[0, 1], [1, 0], [0, -1], [-1, 0]]

for (let i = 0; i < N; ++i) {
    for (let j = 0; j < N; ++j) {
        if (board[i][j] === 2) {
            start = [i, j]
        }
        if (board[i][j] === 3) {
            goal = [i, j]
        }
    }
}

const bfs = (s) => {
    let q = [s]
    let visit = Array(N).fill([]).map(e => [...new Array(N).fill(0)]) // 무친 자바스크립트
    visit[s[0]][s[1]] = 1
    let depth = 0
    while (q.length) {
        depth++
        let [y, x] = q.shift() // 현재 위치
        for (const delta of mv) {
            let [dy, dx] = delta
            let [ny, nx] = [y + dy, x + dx]
            // 갈 수 없는 조건 1. 보드에서 벗어나려고 할때.
            if (ny < 0 || ny > N - 1 || nx < 0 || nx > N - 1) continue
            // 갈수 없는 조건 2. 길이 벽으로 막혀있을때
            if  (board[ny][nx] === 1 ) continue
            // 갈 수 없는 조건 3. 이미 간 곳일 경우
            if (visit[ny][nx] > 0) continue
            visit[ny][nx] = visit[y][x] + 1
            q.push([ny, nx])
        }
        console.log(depth, '------------------------------------------------', visit)
    }
    // while이 끝나면, bfs는 종료되었다!!!!!!!!!!!!!!!!!!!!important
    let [gy, gx]= goal
    if (visit[gy][gx]) console.log('와 정말 대단한 속도로 도착하셨군요 거리:', visit[gy][gx] - 1)
}

bfs(start)


