// 문제
// 숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다. 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 몇 개 가지고 있는지 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 상근이가 가지고 있는 숫자 카드의 개수 N(1 ≤ N ≤ 500,000)이 주어진다. 둘째 줄에는 숫자 카드에 적혀있는 정수가 주어진다. 숫자 카드에 적혀있는 수는 -10,000,000보다 크거나 같고, 10,000,000보다 작거나 같다.

// 셋째 줄에는 M(1 ≤ M ≤ 500,000)이 주어진다. 넷째 줄에는 상근이가 몇 개 가지고 있는 숫자 카드인지 구해야 할 M개의 정수가 주어지며, 이 수는 공백으로 구분되어져 있다. 이 수도 -10,000,000보다 크거나 같고, 10,000,000보다 작거나 같다.

// 출력
// 첫째 줄에 입력으로 주어진 M개의 수에 대해서, 각 수가 적힌 숫자 카드를 상근이가 몇 개 가지고 있는지를 공백으로 구분해 출력한다.

//가지고 있는 수 N
//카드 종류
//구해야하는 수  M
//찾아야 하는 카드
let input = `10 
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`.toString().split('\n')

const [n,cards,m,t] = [Number(input[0]),
                            input[1].split(' ').map(e => Number(e)).sort((a,b) => a-b),
                            Number(input[2]),input[3].split(' ').map(e => Number(e))]


// m의 숫자가 될 때 까지 반복한다. - 이진탐색
let found = 0
let answerArry = Array(m).fill(0)

const bs = (arry,target) =>
{
    // console.log(target)
    let start = 0;
    let end = arry.length-1;

    while(start <= end)
    {
        const mid = Math.floor((start+end) / 2)
        if(target === arry[mid] || target === arry[start] || target === arry[end])
        {
            const idx = t.indexOf(target)
            if(target === arry[mid])
            {
                answerArry[idx] += 1
                start = start +1
                end = start +2
            }
            else if(target === arry[start])
            {
                answerArry[idx] += 1
                start = start + 1


            }
            else if(target === arry[end])
            {
                answerArry[idx] += 1
                end = end -1


            }

        }
        else if(target < arry[mid])
        {
            end = mid -1

        }
        else if(target > arry[mid])
        {
            start = mid  +1

        }

    }

}
t.forEach( e => {bs(cards,e)})
console.log(answerArry.join(' '))


