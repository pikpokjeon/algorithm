//https://www.acmicpc.net/problem/1966

// 첫줄 테스트케이스수
// 각 테스트 1줄-> 문서갯수 N, 타겟 인덱스
// 2줄 -> 중요도순서

// 비교배열 생성
// 찾을 문서 중요도 보다 큰게 요소로 있는지 확인-
// 중요도 더 큰 갯수와 숫자 등록
// 있다면, 큐에서 다 빼서 돌림


let input = `3
1 0
5
4 2
1 2 3 4
6 0
1 1 9 1 1 1`.toString().split('\n')

const testNum =  input.shift()
let testList =[]
for(let _ = 0; _ < testNum; _++)
{
    // 각각의 tc에 대해
    let [n, targetIndex] = input.shift().split(' ').map(_ => Number(_))
    let priorityQueue = input.shift().split(' ').map(_ => Number(_))
    console.log(n, targetIndex, priorityQueue)

    //1:1 대응 하는 임시 배열
    let arry = Array.from(Array(n).keys()).map(e => e+1)
    //찾으려는 인덱스가 어떤 값을 가지는지 찾는다
    let p = arry[targetIndex]

    let count = 0
    let printList =[]
    let h = {count:0,idx:[]}

    // 찾을 문서 중요도보다, 큰 중요도를 가진 문서가 존재하는지 확인한다.
    for(let i = 0; i<priorityQueue.length; i ++)
    {
        // 만약 존재한다면.
        if(priorityQueue[i] > targetIndex)
        {
            h.count += 1
            h.idx.push(priorityQueue[i])
            // 이 문서를 큐의 가장 뒤에 재배치한다.

            //현재배열위치가 가장큰 중요도인덱스를 가진다면
            // 이 문서를 인쇄한다.
            if(priorityQueue[i] === h.idx[0])
            {

                printList.push(arry.shift())
                arry.shift()
                count += 1
            }
            else
            {
            arry.unshift(arry.shift())
                
            }
            
        }
        // 아니라면
        // 이 문서를 인쇄한다.
        else
        {

            printList.push(arry.shift())
            count += 1
        }
        
        console.log(printList,count)


    }


    
}