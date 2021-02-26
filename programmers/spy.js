// https://programmers.co.kr/learn/courses/30/lessons/42578
function solution(clothes) {
    var answer = 0;
    let a = {}
    // let all = new Set()
    clothes.forEach( e =>
       {
        if(!a[e[1]])
        {
            a[e[1]] = []
        }
        a[e[1]].push(e[0])
       } 
    )
    
    console.log(a)
    
    
    
    return answer;
}

const input = [[["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]], 
                [["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]]

input.forEach( e => solution(e))