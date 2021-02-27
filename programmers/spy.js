// https://programmers.co.kr/learn/courses/30/lessons/42578
function solution(clothes) {
    let count = 0
    let a = {}
    // let all = new Set()
    clothes.forEach( e =>
       {
        if(!a[e[1]])
        {
            a[e[1]] = []
        }
        a[e[1]].push(e[0])
        count += 1
       } 
    )
    
    let answer = []
    for(const [key,val] of Object.entries(a))
    {
        // console.log(key,val)

    }
    let memo = Object.entries(a).map(e => e[1].map( c => -1))
    console.log(memo)
    const jegui = (arr,i) =>
    {

    }
    
    // console.log(answer)
    
    
    
    return answer;
}

const input = [[["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]], 
                [["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]]

input.forEach( e => solution(e))