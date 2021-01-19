input = `5 17`

const [N, K] = input.split(' ').map(_ => Number(_))


const bfs = (start) => {
    let q = [start]
    visit = new Array(100001).fill(-1)
    visit[start] = 0
    while (q.length) {
        // 여기서 갈 수 있는 정점 중에
        let here = q.shift()
        let there = here * 2
        if (visit[there] === -1 && -1 < there && there < 100001) {
            visit[there] = visit[here] + 1
            q.push(there)
        }
        there = here + 1
        if (visit[there] === -1 && -1 < there && there < 100001) {
            visit[there] = visit[here] + 1
            q.push(there)
        }
        there = here - 1
        if (visit[there] === -1 && -1 < there && there < 100001) {
            visit[there] = visit[here] + 1
            q.push(there)
        }
    }
    console.log(visit[K])
    return
}

bfs(N)

