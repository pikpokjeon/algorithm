
// https://www.acmicpc.net/problem/2667
let input = `7
0110100
0110101
0110101
1000111
0100000
0111110
0111000`.toString().split('\n')
const N = Number(input.shift())
let board = input.map(e => e.split('').map(e => Number(e)))
// console.log(N, board)
// 1이 있는 곳이 집이 있는 곳이다
const mv = [[0,1],[0,-1],[1,0],[-1,0]]
let count = 1;
let hcount = []
const bfs =(s)=> 

{   let [yy,xx] = s
    board[yy][xx] = 0
    let cc = 1
    let q = [s]
    while(q.length)
    {
        let [y,x] = q.shift()
        for( const delta of mv)
        {
            let [dy, dx] = delta
            let [my, mx] = [dy+y, dx+x]
            if(my<0 || mx < 0 || my > N-1 || mx > N-1) continue
            if(board[my][mx] === 0)continue
            q.push([my,mx])
            board.map(e => console.log(e.join(' ')))
            console.log('')
            cc+=1

            board[my][mx] = 0
        }
    }
    hcount.push(cc)

}
// 좌우 아래위에 집이 있는 경우 집의 모임인 단지이다

// 총 단지수와 단지내 집의 수를 오름차 순으로 정렬해서 출력한다.

for(let y =0; y<N; y++)
{
    for(let x=0; x<N; x++)
    {
        if(board[y][x] === 1)
        {
            count+= 1
            bfs([y,x])
        }
    }
}
console.log(hcount.length)
console.log(hcount.sort((a,b)=> a-b).join('\n'))