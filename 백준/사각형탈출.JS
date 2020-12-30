

// const fs = require("fs")

// // 한 칸 띄어쓰기로 구분
// // input[0], input[1] 배열에서 꺼내쓰면 된다.
// let input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split(" ")
//   .map(e => Number(e))

let input ='6 2 10 3'.split(" ")
   .map(e => Number(e))
const[x,y,xw,yh] = input
const compareX = Math.abs(xw - x) > x ? x : Math.abs(xw - x)
const compareY = Math.abs(yh - y) > y ? y : Math.abs(yh - y) 
const answer = compareX > compareY ? compareY : compareX


console.log(answer)