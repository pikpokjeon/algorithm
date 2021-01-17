let input =`ABCCDEABAA
ABCDE`.toString().split('\n')

let T = input[0]
let S = input[1].split('')
let all = []
for(let _=0; _<S.length;_++)
{
    const a = S.shift()
    S.push(a)
    let word = S.join('')
    all.push(word)
}
let answer = 'no'
all.map(e => {if( T.includes(e))answer = 'yes'})

console.log(answer)