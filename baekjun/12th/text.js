
// https://www.acmicpc.net/problem/6998
let input =`2
a b d # e # # c # #
x y u # # z # #
a b d # e # # c f # # g # #
x y v # # u # z w # t # # #`.toString().split('\n')
 const count = Number(input.shift())
 let ts = Array(count).fill([])
 for(let i = 0; i <count; i++)
 {
    ts[i].push(input.shift())
    ts[i].push(input.shift())
    console.log(i)
    // console.log(input.shift())
 }
 console.log(ts)
