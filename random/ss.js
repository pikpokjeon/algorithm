function solution(strings, n) {
  var answer = [];
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  const getAString = strings.map(e => e.split('')[n]).sort()

  const match = strings => n => getAString  => {
    let arry = []
    
    return arry.sort()
  }  

  answer = match(strings)(n)(getAString)
  // console.log(answer)
    return answer;
}

console.log(solution(["abce", "abcd", "cdx"], 2))

//	[abcd, abce, cdx]