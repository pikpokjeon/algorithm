// 1부터 n까지의 합을 구하는 "재귀" 함수를 작성하세요.
// [1, 2, ... , n]
const arraySum = (n) => 
{
    if(n < 2) return 1
    return arraySum(n-1) + n
}
// arraySum(n) => n까지의 모든 수의 합. 1 + 2 + 3 + 4 + 5 
// console.log(arraySum(100))
// console.log(Array(100).fill(1).map((_, idx) => _ + idx).reduce((a, b) => a + b))

// 입력으로 f(1) 값을 받아서 f(n)을 출력하는 함수를 작성해라.
input = 5
const func = (n) =>
{
    if( n < 2) return input
    return func(n-1) + 5

}

input2 = 'sgjhasdkjgbjksadgbk'.split('')
// input2에서 처음으로 나오는 j의 위치를 리턴해라.

const func2 = (word,d) =>
{
    if(d > word.length+1) return 
    if(word[d] === 'j') 
    {
        // console.log(d + 1)
        return
    }
    func2(word,d+1)
}
func2(input2,0)

input3 = 'I AM HAPPY!!'.split('')
// 의 짝수번째 자리에 하트를 넣으세요.

const func3 = (word,n) =>
{
    if(n > word.length + 1) return console.log(word)
    if( !n&1)
    {
        word[n] = '💖'
    }
    func3(word, n + 1)
}


// func3(input3,0)

// 랜덤으로 숫자를 6개 고른다. (1부터 45 사이에서)
// 고른 숫자가 [1,2,3,4,5,6] 일 경우, 1등 당첨을 출력하며, 거기까지 걸린 횟수를 출력한다.
// 단 숫자 6개를 고를때, 재귀함수를 작성한다.

// hint!! 정렬을 이용하자.

// Math.rand를 사용하지 말자.

let init = Array.from(Array(7).keys()).map(e => e + 1)
let a = new Array(6).fill(-1)
// 함수 ???는 init 배열에서 6개를 고른 조합을 계산하여, 만약 그 조합이 [1,2,3,4,5,6] 일 경우 console.log() && return 을 시행한다.
const compare = [1,2,3,4,5,6]
// const randomFunc = (arr, n , i) => 
// {
//     // console.log(arr, n , i)
//     init = init.sort(() => 0.5 - Math.random())
//     if(arr.length === 6 )
//     {
//         arr = arr.sort((a,b) => a-b)
//         console.log(arr)

//         if(check(arr, 0))
//         {
//             console.log('1등 당첨',arr, i)
//         }
//         else 
//         {
//             a.fill(-1)
//             randomFunc([],0, i + 1)
//             return
//         }
//     }
//     if(a[n] < 0)
//     {
//         arr.push(init[n])
//         randomFunc(arr, n + 1, i)
//     }

// }


// const check = (arr, n) => {
//     if (n === 5) {
//         if (arr[n] === 6) return true
//         return false
//     }
//     if (arr[n] === n + 1) 
//     {
//         check(arr, n + 1)
//     } 
//     else 
//     {
//         return false
//     }
// }

// randomFunc([],0,0)


const randomFunc = (arr, n , i) => 
{
    // console.log(arr, n , i)
    init = init.sort(() => 0.5 - Math.random())
    if(arr.length === 6 )
    {
        arr = arr.sort((a,b) => a-b)
        console.log(arr)

        if(check(arr, 0))
        {
            console.log('1등 당첨',arr, i)
        }
        else 
        {
            a.fill(-1)
            randomFunc([],0, i + 1)
            return
        }
    }
    if(a[n] < 0)
    {
        a[n] = init[n]
        let bigger = b(a,n,0)
        if(bigger === a[n-1])
        {
        console.log('if',bigger,init[n],a,arr)
        arr.pop()
        a[n] = a[n-1]
        bigger = b(a,n,0)
        arr.push(bigger)
        randomFunc(arr, n + 1, i+1)
        a[n] = -1
        }
        else
        {
            arr.push(bigger)
            console.log('else',bigger,init[n],a,arr)

            randomFunc(arr, n + 1, i+1)
            arr.pop()
            a[n] = -1
        }

    }

}

const b = (a,n, i) =>
{
    console.log('b start')
    if(n > 2) return a[n]
    else if(a[n]>a[n-1]) return a[n]
    else if(a[n] < a[n-1]) 
    {
        console.log(a[n-1])
     
        return a[n-1]
    }
    else
    {
        console.log('fail')
        return a[n]
    }
}


const check = (arr, n) => {
    if (n === 5) {
        if (arr[n] === 6) return true
        return false
    }
    if (arr[n] === n + 1) 
    {
        check(arr, n + 1)
    } 
    else 
    {
        return false
    }
}

randomFunc([],0,0)