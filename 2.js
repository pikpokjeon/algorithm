//https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript

// 각 움직임으로 부터 순회하여 인형을 선택하는 함수
// 0 일 경우에 다음번째 배열에 접근하여 0이 아닌 경우 
// 숫자를 얻어내서  배열에 담음
const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1]
]
const moves = [1, 5, 3, 5, 1, 2, 1, 4]

const verticalTraverse = (board, column) => {
  let arr = []
  for (let i = 0; i < board.length; ++i) {
      arr.push(board[i][column])
  }
  return arr
}

const findNotZero = (arr) => {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== 0) {
      return [arr[i], i]
    }
  }
  return [null, null]
}

const solution = (board, moves) => {
  let arry = []
  let answer = 0;
  // Traverse 2-dimensional array vetically, and pick a element which is not 0.
  moves.forEach(move => {
    let [elem, needToDelete] = findNotZero(verticalTraverse(board, move - 1))
    if (elem) {
      board[needToDelete][move -1] = 0
      if (arry[arry.length - 1] && arry[arry.length - 1] === elem) {
        arry.pop()
        answer += 2
      }
      else {
        arry.push(elem)
      }
    }
  })
  return answer

}

console.log(solution(board, moves))
// console.log(findNotZero(verticalTraverse(board, 0)))