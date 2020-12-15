function solution(strings, n) {
  var answer = [];
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  const getAString =
    strings.map(e => e.split('')[n]).sort()

  const match = strings => n => getAString  => {
    
    let arry = []
    strings.forEach(e => getAString.forEach(
      (x, i) => {
        console.log(x,i)
        if(e[n]=== x ) 
          {arry.push(e)[i]}
        }))

      
    arry = Array.from(new Set(arry));
    return arry.sort()
  }

  answer = match(strings)(n)(getAString)
  // console.log(answer)
  return answer;
}

console.log(solution(["abce", "abcd", "cdx"], 2))

//	[abcd, abce, cdx]