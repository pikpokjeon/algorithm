// https://www.acmicpc.net/problem/18352
// let input = `4 3 2 1
// 1 2
// 1 3
// 1 4`.toString().split('\n')
// let input = `4 3 2 1
// 1 2
// 1 3
// 1 4`.toString().split('\n')
let input = `4 3 2 1
1 2
1 3
1 4`.toString().split('\n')

// let input = `4 4 2 1
// 1 2
// 1 3
// 2 3
// 2 4`.toString().split('\n')
// 도시개수 / 도로개수 / 도달거리 / 출발도시번호 
const [j, g, d, s] = input.shift().split(' ').map(e => Number(e))
input = input.map( e => e.split(' ').map(e => Number(e)))
// 하나 더 크게 만들어 준다
G = Array(j+1).fill([]).map(e => [...new Array()])
for(let i = 0; i < g; i ++)
{
    // 각각 도시에 연결된 도시들을 이어준다
    let [a,b] = input[i]
    G[a].push(b)
    G[b].push(a)
}
for(const _ of G)
{    // 오름차순으로 간선들을 정리한다
    _.sort()
}

// 방문 배열을 만든다
let visit = Array(j+1).fill(0)
let uu = Array(j+1).fill(0)
// for(let k = 0; )
let a = []
// let all = new Set()
let all = []
let count = 0
for(let z = 1; z<j; z++)
{
    console.log(z,'enter')

    if(visit[z] < 1)
    {
        console.log('start')
        let r = `${z}`
        let q = [z]
        visit[z] = 1
        uu[z] = z
        console.log('visit :',visit)
        while(q.length)

        {   
            a.push(count)
            console.log('q : ',q)

            if( count === d+1)
            {
                console.log('끝',count,r,d)
                
                if( d === 1)
                {
                    console.log('answer :', G[s].join('\n'))
                }
                else if( d > 1 )
                {
                    console.log('all:',all)
                    if(all.length !== d +1)
                    {
                        console.log(-1)
                        return
                    }
                    console.log('answer :', r.split('')[d+1])
                    
                }
                return
            }

            let at = q.shift()

            for(const w of G[at])
            {

                if(!visit[w])
                {   count += 1
                    visit[w] = 1

                    q.push(w)
                    uu[w-1] = z
                    r+=w
                    console.log('uu:', uu)
                    console.log('G:', G)
                    console.log('count', count)
                    all.push(q)

                }

            }
            


        }                    

        


       

    }
}

console.log('a',a)
console.log('G',G)
// console.log(Math.max.apply(null,uu))
console.log('uu',uu)