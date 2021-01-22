input = '500'.toString().trim()

let n = Number(input)
let zeros = new Array(501).fill(0)
const fact = (n) => {
    if (n === 0) return 1
    if (n < 2) return 1
    return BigInt(fact(n-1)) * BigInt(n)
}

let facn = BigInt(fact(n))
console.log(facn)
let cnt = 0
while (1) {
    if (facn % 10n === 0n) {
        cnt++
        facn = facn / 10n
    }
    else {
        break
    }
}

console.log(cnt)