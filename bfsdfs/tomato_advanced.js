
// shift()연산에서 시간초과나 나서 만듬

class Node 
{
    constructor(data) 
    {
        this.data = data
        this.next = null
    }
}
class Queue 
{
    constructor()
    {
        this.length = 0
        this.head = null
        this.tail = null
    }
    push(data)
    {
        let node = new Node(data)
        if(!this.head)
        {
            this.head = node
        }
        else
        {
            this.tail.next = node
        }
        this.tail = node
        return ++this.length
    }

    shift()
    {
        if(!this.head) return false
        const r = this.head.data
        this.head = this.head.next
        this.length --
        if(!this.length) this.tail = null
        return r
    }
}


// 가로 세로 높이
let input = `5 3 2
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 1 0 0
0 0 0 0 0`.toString().split('\n')


const [M,N,H] = input.shift().split(' ').map(e => Number(e))
const board = Array(H).fill([]).map(_ => [...new Array()])
for(let _ =0; _ < H; _ ++)
{
    for(let i = 0; i < N; i ++)
    {
        board[_].push(input.shift().split(' ').map(e => Number(e)))
    }
}
let visit = Array(H).fill([]).map( _ => [...new Array(N).fill([]).map(_ => [...new Array(M).fill(-1)])])
// 익음 - 1. 덜익음 - 0, 없음 - -1,
// 상하좌우와 현재 위치에서 위 아래도 영향을 줘야한다
const mv = [[0,0,1],[0,0,-1],[0,1,0],[0,-1,0],[1,0,0],[-1,0,0]]

const search = (start) =>
{   
    let q = new Queue ()
    let s = [...start]
    for(const p of s)
    {
        let [h,y,x] = p
        visit[h][y][x] = 1
        q.push(p)
    }
    while(q.length)
    {
        let [h,y,x] = q.shift()
        for (const delta of mv)
        {
            let [dh,dy,dx] = delta
            let [mh,my,mx] = [dh + h ,dy + y ,dx + x]
            if(mh < 0 || my < 0 || mx < 0 || mh > H -1 || my > N-1 || mx > M -1) continue
            if(board[mh][my][mx] < 0) continue
            if(visit[mh][my][mx] > 0) continue

            // console.log(visit[h][y][x] + 1)
            visit[mh][my][mx] = visit[h][y][x] + 1
            q.push([mh,my,mx])
        }
    }
    console.log(visit.map( e=> e.join('  ')).map(e => e.split(' ')))
}
let all = []
for(let h = 0; h < H; h ++)
{
    for(let y = 0; y < N; y ++)
    {
        for(let x = 0; x < M; x ++)
        {
            if(board[h][y][x] === 1 && visit[h][y][x] < 0)
            {
                all.push([h,y,x])
            }
            if(board[h][y][x] === 0)
            {
                visit[h][y][x] = 0
            }
        }
    }
}
search(all)

const total = visit.flatMap( e => e.flatMap( _ => _))
const initArry = board.flatMap( e => e.flatMap( _ => _))
const isZero = total.find( e => e === 0)
const maxDay = Math.max.apply(null, total)
let minus = 0
let one = 0
board.flatMap( e => e.flatMap( _ => _)).map( i => {if(i === 1)one += 1;if(i === -1)minus +=1})

if(isZero !== undefined)
{
    console.log(-1)
}
else if (minus + one === initArry.length)
{
    console.log(0)
}
else
{
    console.log(maxDay - 1)
}
