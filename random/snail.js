input = `5 1 6`.toString().trim().split(' ')

let [a, b, v] = input.map(_ => parseInt(_))

console.log(Math.round(v / (a - b)) - b)

// const jegui = (day, m) =>
// {
//     if(m === v) return day
//     else jegui(day + 1, (m + a )-b)
// }
// let now = 0
// let day = 0
// while (1) {
//     day++
//     now += a
//     if (now >= v) {
//         console.log(day)
//         break
//     }
//     now -= b

// }

// console.log(jegui(0,0))