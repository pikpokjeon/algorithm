let input = `aab
abacabaa`.toString().split('\n')

let T = input[0].split('')
let S = input[1]
let all = []
for (let _ = 0; _ < T.length; _++) {
    const a = T.shift()
    T.push(a)
    all.push(T.join(''))
    // console.log(word)
}
let answer = 0

for (let word = 0; word < all.length; word++) 
{   let count = 0

    for (let b = 0; b < all[word].length; b++) 
    {
        for (let a = 0 + count; a < S.length; a++) 
        {

            console.log(all[word][b], all[word], S[a], S)

        }
        count+=1
    }
}



all.map(e => { if (S.includes(e)) answer += 1 })

console.log(answer)