function solution(tickets) {
    var answer = [];
    let visit = Array(tickets.length).fill(-1)
    let board = {}
    let choice = []
    let count = tickets.length
    for(const [num,[from,to]] of Object.entries(tickets))
        {
            if(!board[from])
            {
                board[from] = []
            }
            board[from].push([from,to,Number(num)])
        }
        let store = []

        const search = (arr) =>
        {
            console.log('-----------------')
            console.log('search arry : ',arr)
            let result;
            if(!arr) return false
            let choice = []
            for(const [from,to,num] of arr)
            {
                if(visit[num] < 0)
                {
                    console.log('to',to)
                choice.push(to)
                }
            }
            choice.sort()

            for(let i = 0; i < arr.length; i++)
            {
                for(let k = 0; k <tickets.length; k++)
                {
                    if(arr[i][1] === choice[0])
                    {
                        console.log('choice',choice)
                        if(!board[choice[0]])
                        {
                            console.log('arr : ',arr)

                            console.log('none')
                            const to = arr[i][0]
                            const idx = arr[i][2]
                            result = [to,idx]
                            console.log('arr[i][2]>>',arr[i][2])
                            visit[arr[i][2]] = -1
                            console.log(board[choice[1]])
                            search(board[choice[1]])
                            store.push(board[choice[1]])
                            break
                            // continue
                        }
                        else
                        {
                            console.log('else')
                            const to = arr[i][1]
                            const idx = arr[i][2]
                            result = [to,idx]
                            
                            console.log('else result : ',result)
                            break
                        }
                    }
                }
            }
            // result = result.flatMap( e => e).filter( e=> e !== undefined)
            return result
            
        }
        const init = search(board['ICN'])
        console.log(board)

        const f = (info,arry,len,visit) =>
        
        {
            console.log('arr',info,arry)
            if(len === 0)
            {
                return arry
            }
            else if(visit[info[1]] < 0)
            {
                console.log('info',info)
                if(info[0] !== arry[arry.length-1])
                {
                    arry.push(info[0])
                }
                visit[info[1]] = info[1]
                const get = search(board[info[0]])
                console.log(get)
                return f(get,arry,len -1,visit)
        
            }
            else
            {
                return arry
            }
        }
        answer = f(init,['ICN'],tickets.length,visit)
        
        for(let a = 0; a <store.length; a++)
        {

            board[answer[answer.length-1]].map((e,i) => {
                if(!answer.includes(e[1]))
                {
                    answer.push(store[a][1])
                }
            })
            
        }
        for(let k = 0; k <visit.length; k ++)
        {
            if(visit[k] < 0)
            {
                board[answer[answer.length-1]].map( (e,i) =>{
                    if( e[2] === k)
                    {
                        answer.push(e[1])
                    }
                }) 
            }
        }
        

    return answer;
}

console.log(solution([["ICN", "COO"], ["ICN", "BOO"], ["COO", "ICN"], ["BOO", "DOO"]] ))
// [ICN, ATL, ICN, SFO, ATL, SFO]

// [["ICN", "A"], ["A", "C"], ['A', 'D'], ['D', "B"], ['B', "A"]] //return : [ICN, A, D, B, A, C]

//[["ICN","A"],["ICN","A"],["A","ICN"]]

//[["ICN", "COO"], ["ICN", "BOO"], ["COO", "ICN"], ["BOO", "DOO"]] //ICN -> COO -> ICN -> BOO -> DOO