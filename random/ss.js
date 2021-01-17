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

let a =[1,2,3,4,5,6]
a.map(e => {a.push(e+1); for(i=0; i<a.length; i++){console.log('a:',a,i,a.length,a[a.length-1])}})