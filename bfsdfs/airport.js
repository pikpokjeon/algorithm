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
        console.log(board)
        let store = []

        const search = (arr) =>
        {
            let result;
            console.log(arr)
            if(!arr) return false
            let choice = []
            for(const [from,to,num] of arr)
            {
                if(visit[num] < 0)
                {
                choice.push(to)
                }
            }
            choice.sort()
            // let result = arr.map( e => {
            //     if(e[1] === choice[0])
            //     {
            //         const to = e[1]
            //         const idx = e[2]
            //         return [to,idx]
            //     }
            // })
            for(let i = 0; i < arr.length; i++)
            {
                for(let k = 0; k <tickets.length; k++)
                {
                    if(arr[i][1] === choice[0])
                    {
                        if(!board[choice[0]])
                        {
                            const to = arr[i][0]
                            const idx = arr[i][2]
                            result = [to,idx]
                            console.log('choice',arr[i][2])
                            visit[arr[i][2]] = -1
                            search(board[choice[1]])
                            store.push(arr[i])
                            break
                            // continue
                        }
                        else
                        {
                            console.log('0',arr[i])
                            
                            const to = arr[i][1]
                            const idx = arr[i][2]
                            result = [to,idx]
                            break
                        }
                    }
                }
            }
            // result = result.flatMap( e => e).filter( e=> e !== undefined)
            console.log('result',result)
            return result
            
        }
        const init = search(board['ICN'])

        const f = (info,arry,len,visit) =>
        
        {
            console.log('arry',arry)
            if(len === 0)
            {
                return arry
            }
            else if(visit[info[1]] < 0)
            {
                console.log('info',info)
                if(info[0] !== arry[arry.length-1])
                {
                    // console.log('info',info[0])
                    arry.push(info[0])
                }
                visit[info[1]] = info[1]
                const get = search(board[info[0]])
                console.log(get)
                return f(get,arry,len -1,visit)
                // console.log('arry0',arry[arry.length-1],info[0])
        
            }
        }
        answer = f(init,['ICN'],tickets.length,visit)
        console.log('visit', visit)
        for(let a = 0; a <store.length; a++)
        {
            answer.push(store[a][1])
        }
        

    return answer;
}

console.log(solution([["ICN", "A"], ["A", "C"], ['A', 'D'], ['D', "B"], ['B', "A"]]))
// [ICN, ATL, ICN, SFO, ATL, SFO]

// [["ICN", "A"], ["A", "C"], ['A', 'D'], ['D', "B"], ['B', "A"]] //return : [ICN, A, D, B, A, C]