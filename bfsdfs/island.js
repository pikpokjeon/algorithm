let input = `1 1
1
1 1
0
2 2
0 1
1 0
3 2
1 1 1
1 1 1
5 4
1 0 1 0 0
1 0 0 0 0
1 0 1 0 1
1 0 0 1 0
5 4
1 1 1 0 1
1 0 1 0 1
1 0 1 0 1
1 0 1 1 1
5 5
1 0 1 0 1
0 0 0 0 0
1 0 1 0 1
0 0 0 0 0
1 0 1 0 1
0 0`.toString().split('\n')
input.pop()
while(input.length)
{
    // 첫번째 입력부분에 테스트케이스 갯수가 나와있다 -> H
    let [W, H] = input.shift().split(' ').map(e => Number(e))
    let island = []
    if (W === 0 && H === 0) return
    // H만큼 돌면서 테스트 케이스들을 추가해준다
    for(let _ =0; _ < H; _ ++)
    {
        
         island.push(input.shift().split(' ').map(e => Number(e)))
    }
    // 여기서 해당 케이스의 함수를 작성하며, 바로 출력을 해주면 된다.
    let visit = Array(H+1).fill([]).map(e => [...Array(W+1).fill(0)])
    // 대각선도 건널 수 있어서 8방의 움직임을 만들어준다
    let mv = [[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]]
    // 1인 부분에서 bfs를 실행해준다
    let count = 1
    for(let y = 0; y < H; y++)
    {
        for(let x = 0; x < W; x++)
        {

            if(island[y][x] > 0 && visit[y][x] < 1)
            {
                let q = [[y,x]]
                visit[y][x] = count
                while(q.length)
                {
                    let [yy,xx] = q.shift()
                    for(let delta of mv)
                    {
                        let [dy,dx] = delta
                        let [my,mx] = [dy+yy, dx+xx]
                        if(my < 0 || mx < 0 || my > H-1 || mx > W-1) continue
                        if(visit[my][mx] > 0) continue
                        if(island[my][mx] < 1) continue
                        q.push([my,mx])
                        visit[my][mx] = count
                        

                        
                    }
                }
                count+=1
            }
        }
        
    }
    let answer = 0
    // bfs가 돌 때 카운트를 세준다
    visit.map( e => e.map( e => { if(e> answer) answer = e}))
    console.log(answer)
    
}