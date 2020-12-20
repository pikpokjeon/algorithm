const a = [123, -123, 120, 0]
const b = 120
const c = 0

//https://leetcode.com/problems/reverse-integer/submissions/
const reverse = (e) => {
  const a = e.toString().split('').sort((a, b) => b - a)
  // const idx = a.findIndex( e => e === '0')


  if (a[a.length - 1] === '0' && a.length > 1) {
    a.pop()
    return a.join('')


  } else {
    return a.join('')

  }



}
a.forEach(e => console.log(reverse(e)))
// reverse(a[0])

const reverse2 = (number) => {
  const a = number.toString().split('').reverse()
  // const idx = a.findIndex( e => e === '0')


  while (a.length > 1) {
    if (a[a.length - 1] === '-') {
      a.unshift(a.pop())
    }
    if (a[a.length - 1] === '0') {
      a.pop()

    } else {
      break
    }
  }
  const b = parseInt(a.join(''))
  if (b >= 2 ** 31 - 1 || b <= -(2 ** 31)) {
    return 0
  }
  return b

}


function reverse(x: number): number {
  const answer = parseInt(String(Math.abs(x)).split('').reverse().join('')) * Math.sign(x)
  if (answer >= (2 ** 32 / 2) - 1 || answer < -(2 ** 32 / 2)) return 0
  else return answer
};