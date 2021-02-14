// 사칙연산
// https://programmers.co.kr/learn/courses/30/lessons/1843?language=javascript
// 문제 설명
// 사칙연산에서 더하기(+)는 결합법칙이 성립하지만, 빼기(-)는 결합법칙이 성립하지 않습니다.
// 예를 들어 식 1 - 5 - 3은 연산 순서에 따라 다음과 같이 다른 결과를 가집니다.

// ((1 - 5) - 3) = -7
// (1 - (5 - 3)) = -1
// 위 예시와 같이 뺄셈은 연산 순서에 따라 그 결과가 바뀔 수 있습니다.
// 또 다른 예로 식 1 - 3 + 5 - 8은 연산 순서에 따라 다음과 같이 5가지 결과가 나옵니다.

// (((1 - 3) + 5) - 8) = -5
// ((1 - (3 + 5)) - 8) = -15
// (1 - ((3 + 5) - 8)) = 1
// (1 - (3 + (5 - 8))) = 1
// ((1 - 3) + (5 - 8)) = -5
// 위와 같이 서로 다른 연산 순서의 계산 결과는 [-15, -5, -5, 1, 1]이 되며, 이중 최댓값은 1입니다.
// 문자열 형태의 숫자와, 더하기 기호(+), 뺄셈 기호(-)가 들어있는 배열 arr가 매개변수로 주어질 때, 서로 다른 연산순서의 계산 결과 중 최댓값을 return 하도록 solution 함수를 완성해 주세요.

// 제한 사항
// arr는 두 연산자 +, - 와 숫자가 들어있는 배열이며, 길이는 3 이상 201 이하 입니다.
// arr의 길이는 항상 홀수입니다.
// arr에 들어있는 숫자의 개수는 2개 이상 101개 이하이며, 연산자의 개수는 (숫자의 개수) -1 입니다.
// 숫자는 1 이상 1,000 이하의 자연수가 문자열 형태로 들어있습니다.. (ex : 456)
// 배열의 첫 번째 원소와 마지막 원소는 반드시 숫자이며, 숫자와 연산자가 항상 번갈아가며 들어있습니다.
// 입출력 예
// arr	result
// [1, -, 3, +, 5, -, 8]	1  7-4   0,2,4,6 [0,2][2,4][4,6]
// [5, -, 3, +, 1, +, 2, -, 4]	3  9-5   0,2,4,6,8  [0,2][2,4][4,6][6,8]
// 입출력 예시
// 입출력 예 #1
// 위의 예시와 같이 (1-(3+(5-8))) = 1 입니다.

// 입출력 예 #2
// (5-(3+((1+2)-4))) = 3 입니다.

function solution(arr) {
   let answer = 1;
   const n = arr.length
   const nc = Math.round(n/2)
   const nums = arr.filter( e => {if(Number(e) > -1) return Number(e)}).map( e => Number(e))
   const cal = arr.filter( e => {if(e === '+' || e === '-') return e})
   const c = cal.length
   let memo = Array(n).fill([]).map( e => [...Array(n).fill(-1)])

   let orderMemo = Array(c).fill(-1)
   let order = []
   const go = (i,num, memo, start, end) =>
   {
      
   }
   const pos = (i,arr) =>
   {
      if(arr.length === c)
      {
         order.push([...arr])
      }

      for(let k = 0; k < c ; k ++)
      {
         if(orderMemo[k]< 0)
         {
         orderMemo[k] = 1
         arr.push(k)
         pos(i+1,arr)
         arr.pop()
         orderMemo[k] = -1
         }
      }
   }
   // const a = Array.from(Array(c).keys()).map( e => pos(e,[]))
   const a = pos(0,[])
   console.log(order)

   const exec = (cal,a,b) =>
   {
      console.log(cal,a,b)
      if(cal === "+") return a + b
      return a - b
      
   }
   let answers = []

   for(let i = 0; i <order.length; i++)
   {
      let mm = Array(n).fill(false)
      let acc = Array(c).fill(false)

      // order[i].reduce((acc,curr,curridx,arry) =>
      // {
      // mm[2] = (mm[3] < 0)? nums[2] + nums[3] : mm[3] + nums[2]
      let answer = 0
      let curr = 0
      let count = 0
      for(let k = 0; k < order[i].length; k++)
      {
      console.log('--------------------')

         // console.log(cal[i],cal,i)
         
         console.log(order[i])
         // console.log(cal[order[i][k]])
         const val = order[i][k]
         // console.log(i,k,val)
         let [ba,a,aa,n,nn,c] = [acc[val-1],acc[val],acc[val+1],nums[val],nums[val+1],cal[order[i][k]]]
         console.log('val : ',val)
         console.log('acc',acc,acc[val+1])
         if(acc[val-1] !== false  || acc[val] !== false || acc[val+1] !== false)
         {
            if(!acc[val] && acc[val-1] && acc[val+1])
            {
               console.log('super')
               acc[val] = exec(c,acc[val-1],aa)
               cirr = exec(c,acc[val-1],aa)
               count += 1

            }
            else if(acc[val-1]  && acc[val] )
            {
               console.log('1')
               acc[val] = exec(c,a,aa)
               curr=  exec(c,a-1,aa)
               count += 1

            }
            else if (aa > -1 && aa !== false)
            {
               console.log('2')
               
               acc[val] = exec(c,n,curr)
               curr = exec(c,n,curr)
            }
            else if ( a > -1 )
            {
               console.log(a,nn,curr)
               console.log('3')
               if(a === false)
               {

                  
                  if( count === 0 )
                  {
                     console.log('3-11')
                     acc[val] = exec(c,n,nn)
                     curr = exec(c,n,nn)
                     count += 1
                  }
                  else if ( aa === false)
                  {
                     console.log(ba)

                     if(ba !== false)
                     {
                        console.log('3-110')
                        acc[val] = exec(c,nn,ba)
                        curr = exec(c,nn,ba)
                        count += 1
                     }
                     else
                     {                     
                        console.log('3-12')
                     acc[val] = exec(c,n,nn)
                     curr = exec(c,n,nn)
                     count += 1
                  }
                  }
                  else if(count > 0)
                  {
                     if(acc[val-1] !== false)
                     {
                     console.log('3-13')

                        acc[val] = exec(c,nn,a)
                        curr = exec(c,nn,a)
                        count += 1
                     }
                     else
                     {
                     console.log('3-14')

                    console.log('3-1',curr)
                     acc[val] = exec(c,n,curr)
                     curr = exec(c,n,curr)
                     count += 1
                     }


                  }
                  else
                  {

                     console.log('3-11')
                     acc[val] = exec(c,n,nn)
                     curr = exec(c,n,nn)
                     count += 1
                  }
                  
               }
               else
               {
                  console.log('3-2')

                  acc[val] = exec(c,aa,n)
                  curr = exec(c,aa,n)
                  count += 1


               }

            }
            else
            {
               
               console.log('4')

               acc[val] = exec(c,n,nn)
               curr = exec(c,n,nn)
               count += 1

            }
         }
         else
         {
            console.log('5')
            
            acc[val] = exec(c,n,nn)
            curr = exec(c,n,nn)
            count += 1


         }
         if(k === order[i].length - 1)
         {
            console.log('answer   >',acc[val])
            curr = 0
      
         }
         console.log(curr,'<---------')
         console.log(nums)
         console.log(acc)
         
         console.log('--------------------')
         console.log(answer)
         
      }
      answers.push(answer)
      answer = 0

         // mm[1] = (mm[2] < 0)? nums[1] + nums[2] : mm[2] + nums[1]
         // mm[3] = (mm[4] < 0)? nums[3] + nums[4] : mm[4] + nums[3]
      // })
   }

   // console.log(nums,cal)
   console.log('answer  >>> ',answers)


   return answer;
}

const tests = [["1","-", "3", "+","5", "-", "8"],
            // ["5", "-", "3", "+", "1", "+", "2", "-", "4"]
         ]
tests.forEach( e => solution(e))