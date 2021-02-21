// https://programmers.co.kr/learn/courses/30/lessons/42578
function solution(clothes) {
    var answer = 0;
    let all = new Set()
    clothes.forEach( e =>
        e.forEahc( a => all.add(a))
    )
    
    console.log(all)
    
    
    
    return answer;
}
