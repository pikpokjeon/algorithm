// 회전하는 큐

// 지민이는 N개의 원소를 포함하고 있는 양방향 순환 큐를 가지고 있다. 지민이는 이 큐에서 몇 개의 원소를 뽑아내려고 한다.

// 지민이는 이 큐에서 다음과 같은 3가지 연산을 수행할 수 있다.

// 첫 번째 원소를 뽑아낸다. 이 연산을 수행하면, 원래 큐의 원소가 a1, ..., ak이었던 것이 a2, ..., ak와 같이 된다.
// 왼쪽으로 한 칸 이동시킨다. 이 연산을 수행하면, a1, ..., ak가 a2, ..., ak, a1이 된다.
// 오른쪽으로 한 칸 이동시킨다. 이 연산을 수행하면, a1, ..., ak가 ak, a1, ..., ak-1이 된다.
// 큐에 처음에 포함되어 있던 수 N이 주어진다. 그리고 지민이가 뽑아내려고 하는 
//원소의 위치가 주어진다. (이 위치는 가장 처음 큐에서의 위치이다.) 
//이때, 그 원소를 주어진 순서대로 뽑아내는데 드는
// 2번, 3번 연산의 최솟값을 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 큐의 크기 N과 뽑아내려고 하는 수의 개수 M이 주어진다.
// N은 50보다 작거나 같은 자연수이고, M은 N보다 작거나 같은 자연수이다. 

// 둘째 줄에는 지민이가 뽑아내려고 하는 수의 위치가 순서대로 주어진다. 
// 위치는 1보다 크거나 같고, N보다 작거나 같은 자연수이다.


// const fs = require("fs")

// // 한 칸 띄어쓰기로 구분
// // input[0], input[1] 배열에서 꺼내쓰면 된다.
// let input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split(" ")
//   .map(e => Number(e))

let input =
    `10 3
    2 9 5`
        .toString()
        .split("\n")
        .map(e => e.split(" ").filter(n => n != 0))
console.log('input', input)

//1 = 배열 0인덱스
//큐크기이자 첫번째의 원소 값 / 뽑으려는 원소위치이자 수의 개수 이자 가장 처음 큐의 위치
//엿먹이려고 보는사람 고통스러울 속도와 질로 승부 :)
const setArr = (input) => {
    //초기   N 배열값이 존재했을 때
    const [qLen, initTargetIdx] = input[0]
    //찾으려는 요소의 총 갯수
    const [targetCount] = input[0][1]

    //찾으려는 target들의 위치 (targetCount만큼 존재) true로 만들어준다.
    const targetIdxArry = input[1]

    //초기 전체배열
    // 큐에 가장 처음에 포함되어 있던 수 N == qLen
    const setTargetArry = () => {
        let arr = new Array(Number(qLen)).fill(false)
        if (targetIdxArry.indexOf(initTargetIdx)) {
            targetIdxArry.forEach(i => arr[i - 1] = true)

        }
        else {
        }
        return arr

    }
    return setTargetArry()

}



const valArry = setArr(input)

console.log("valArry",valArry)
let [sCount, tCount] = [0, 0]



//순서대로 호출
const A = (arr) => arr.splice(1,arr.length)
const B = (arr) => arr.push(arr.splice())
const C = (arr) => arr.unshift(arr.pop())


//양방향큐 -> 맨처음 맨마지막이 큐의 빠져나오는 기준이 된다
//위치를 기준으로 함수를 호출
const funcAArr = valArry => (A,B,C) => {
    let shiftArry = valArry
    valArry.forEach(e => {
        if (e === false) {
            shiftArry = A(shiftArry)
            console.log("shiftArry",shiftArry)
        }
        else{
            
        }
    })
    return shiftArry
}
const shiftedArry = funcAArr(valArry)(A,B,C)
console.log(shiftedArry)
// const execAllandCount = 

// 두번째 줄의 각 숫자값은 뽑으려는 원소의 위치이며, 그 위치들을 주어진 순서대로 접근해 뽑기 위한
//
// 마지막 위치까지 뽑는데 드는 
// 각 위치의 거리를 파악후 실행되는 각 함수의 횟수
// console.log(answer)