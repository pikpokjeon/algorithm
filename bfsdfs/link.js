
// 문제
// 방향 없는 그래프가 주어졌을 때, 연결 요소 (Connected Component)의 개수를 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 정점의 개수 N과 간선의 개수 M이 주어진다. (1 ≤ N ≤ 1,000, 0 ≤ M ≤ N×(N-1)/2) 
// 둘째 줄부터 M개의 줄에 간선의 양 끝점 u와 v가 주어진다. (1 ≤ u, v ≤ N, u ≠ v) 같은 간선은 한 번만 주어진다.

// 출력
// 첫째 줄에 연결 요소의 개수를 출력한다.

let input =`6 8
1 2
2 5
5 1
3 4
4 6
5 4
2 4
2 3`.toString().split('\n')

const [N,M] = input.shift().split(' ').map(e => Number(e))
let link = input.map(e => e.split(' ').map(e=> Number(e)))

let G = Array(N+1).fill([]).map(e => [...new Array()])
let visit = Array(N+1).fill(0)

for(let i=0; i<M; i++)
{
    let [a,b] = link[i]
    // console.log(a,b)
    G[a].push(b)
    G[b].push(a)
}

for(const i of G)
{
    i.sort()
}
let uu = Array(N+1).fill([]).map(e => [...new Array(1).fill(0)])
let c = 0
const bfs = (s) => 
{
    let q = [s]
    visit[s] = 1
    while (q.length)
    {
        let at = q.shift()
        for(const w of G[at])
        {
            if(!visit[w])
            {
                visit[w] = 1
                q.push(w)
                uu[s] = 1
            }
        }
    }
    c +=1


}

for(let i = 1; i<N; i++)
{
    if(visit[i] < 1)
    {
        bfs(i)
    }
}
let count = 0

uu.map(e => {
    if(e === 1)
    {
        count+=1
    }
})
console.log(c)
