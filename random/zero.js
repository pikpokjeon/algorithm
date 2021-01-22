input = `10
1
3
5
4
0
0
7
0
0
6`.toString().trim().split('\n').map(_ => Number(_))

let stack = []
const T = input.shift()
for (let i = 0; i < T; i++) {
    let number = input[i]
    if (number !== 0) stack.push(number)
    else stack.pop()
}
total =0 
for (let i = 0 ;i < stack.length; i++) {
    total += stack[i]
}

// let L = input[0]
// let total = 0
// let zeros = 0
// while (L) {
//     if (input[L] !== 0) {
//         if (zeros > 0) {
//             zeros--
//         }
//         else {
//             total += input[L]
//         }
//         L--
//     }
//     else {
//         zeros++
//         L --
//     }
// }
console.log(total)