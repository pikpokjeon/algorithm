const arry = [1,4,2,5,3]


const solution = (arry) => {

  let newArry = []
  let answer = 0

  for (let i = 0; i <arry.length ; i ++)
  {

    for (let j = 0; j <arry.length ; j ++)
    {
      if( i >= j) 

      newArry.push(arry.slice(i-1, j+1))

      if( newArry.length & 1 && newArry.length>1)
      {
        answer+= newArry.reduce((a,b )=> a+b)
      }
    }
   
  }
  return answer


  
}


solution(arry)