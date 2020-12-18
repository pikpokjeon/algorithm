const matrix = [[1,2,3],[4,5,6],[7,8,9]]


const solution =  (matrix) =>
{
  let answer = 0
  const arryLength = matrix.length;
  for(let i = 0; i<arryLength; ++i )
  {

    answer += matrix[i][i]
    answer += matrix[i][arryLength-i-1]

     
  }
  const mid =  arryLength%2 !== 0 ?  Math.round(arryLength%2) : 0

  answer -= matrix[mid][mid]
  console.log(answer)

  return answer
}

solution(matrix)