const target = 'abc'
const wordArry = ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc']

const solution = (target, wordArry) => {
  const targetStrArry = target.split('')
  let answer = 0
  let arry = []
  for (let i = 0; i < wordArry.length; i++) {
    const a = wordArry[i].map(
      e => {
        if (targetStrArry[i] === e) {

        }

      })


  }
}

solution(target, wordArry)