

const main = ( test ) => 
{

    let graph = []
    for( const[from,to] of test)
    {
        if(!graph[from])
        {
            graph[from] = []
        }
        graph[from].push(to)

        if(!graph[to]) graph[to] = []
    }

    console.log(graph)
    let visit = Array(test.length).fill(-1)
    let board = {}
    let store = []
    for(const [num,[from,to]] of Object.entries(test))
    {
        if(!board[from]) board[from] = []
        board[from].push([Number(num),from,to])
    }
    for(const element of test)
    {
        visit[element] = -1
    }

    console.log('visit',visit)
    console.log(board)
    let init = board['ICN'].shift()
    let q = [init]

    const dfs = (q, from, graph, count,all) =>
    {
        console.log(q, from, graph, count,all)
        if(count === 1) return console.log('arr>>>>',q)
        // let q = [from]
        while(q.length){
        graph[from].map ( (e,i )=> {
            console.log('e',e)
            let at = q.shift()
            if(graph[at])
            {
                for(const to of graph[at])
                {
                    if(visit[[from,to]] < 0){
                    visit[[from,to]] = 1
                    console.log('from : ', at,'to :',to )
                    q.push(to)
                    all.push(to)
                    dfs(q,to,graph,count-1,all)

                    }

                }
            }
            else
            {
                dfs(q,graph[from][i+1],graph,count-1,all)

            }
        })

    }

        
    }
    dfs(['ICN'],'ICN',graph,test.length+1,['ICN'])

    // while(q.length)
    // {
    //     console.log('q',q)
    //     let [num,from,to] = q.shift()
    //     // visit[num] = board[from][0]
    //     // console.log(num,from,to)
    //     for (const [numx,fromx,tox] of board[from])
    //     {
    //         if(visit[num] < 0)
    //         {
    //             console.log(numx,fromx,tox)
    //             q.push([])
    //         }
    //     }
    // }


}



const tests = [
    [["ICN", "COO"], ["ICN", "BOO"], ["COO", "ICN"], ["BOO", "DOO"]],
    [["ICN", "A"], ["A", "C"], ['A', 'D'], ['D', "B"], ['B', "A"]],
    [["ICN","B"],["ICN","A"],["A","ICN"]]
]

for(let i =0; i < tests.length; i++)
{
    main(tests[i])

}