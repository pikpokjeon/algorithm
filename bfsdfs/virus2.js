
let input =`5
6 8 2 6 2
3 2 3 4 6
6 7 3 3 2
7 2 5 3 6
8 9 5 2 7`.toString().split('\n')
// 2차원 정사각형 행.열 수 
const N = Number(input.shift())
// 보드만들기
let board = input.map(e => e.split(' ').map(a => Number(a)))
// 존재하는 숫자들
let nums = Array.from(new Set(board.flatMap( e => e)))
// console.log(N,nums)
let visit = Array(N).fill([]).map( e => [...new Array(N).fill(0)])
// 0은 빈칸. 1은 벽, 2는 바이러스가 있음
const mv = [[0,1],[0,-1],[1,0],[-1,0]]

let count = 0
const bfs = (s,at) =>
{   c
    console.log([s[0]][s[1]])

    let q = [s]
    visit[s[0]][s[1]] = 1
    while (q.length)
    {
        let [y,x] = q.shift()
        for(const delta of mv)
       {
            let [dy, dx] = delta
            let [my, mx] = [dy+y, dx+x]
            if(my > N-1 || mx > N-1 || my <0 ||mx < 0) continue
            if(board[my][mx] === 1) continue
            if(board[my][mx] === 2) {
                continue
            }
            count+=1
            if(visit[my][mx]>0) continue
            q.push([my,mx])

       }  
    }
    console.log(visit)
}
for(const num of nums)
{
    for(let y=0; y<N; y++)
    {
        for(let x=0; x<N; x++){
            if(num === board[y][x])
            {
                bfs([num -1, ])
            }
        }


    }
}