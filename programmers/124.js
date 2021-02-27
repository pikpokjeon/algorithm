
function solution(n) {
    // const num = [1,2,4]
    let a = n%3
    let b = Math.floor(n/3)
    let num = 0
    if(a === 0)
    {
        a = 4
    }
    if(b !== 1 && b!== 2)
    {
        b = b%3
    }
    console.log(n,a,b)
}

const input = [1,2,3,4,5,6,7,8,9,10,11,12]

input.forEach( e => solution(e))