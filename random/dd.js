input = `150
266
427`.toString().trim().split('\n')

let N = 1
N *= input[0]
N *= input[1]
N *= input[2]

console.log(N)

const answer = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0
}
let now
while (N) {
    now = N % 10
    answer[now]++
    N = Math.floor(N / 10)
}

99 / 10

for (let index = 0; index < 10; index++) {
    console.log(answer[index])
}