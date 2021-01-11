// 1부터 n까지의 합을 구하는 "재귀" 함수를 작성하세요.
// [1, 2, ... , n]
const arraySum = (n) => {
    if (n < 2) return 1
    return arraySum(n - 1) + n
}
// arraySum(n) => n까지의 모든 수의 합. 1 + 2 + 3 + 4 + 5 
// console.log(arraySum(100))
// console.log(Array(100).fill(1).map((_, idx) => _ + idx).reduce((a, b) => a + b))

// 입력으로 f(1) 값을 받아서 f(n)을 출력하는 함수를 작성해라.
input = 5
const func = (n) => {
    if (n < 2) return input
    return func(n - 1) + 5

}

input2 = 'sgjhasdkjgbjksadgbk'.split('')
// input2에서 처음으로 나오는 j의 위치를 리턴해라.

const func2 = (word, d) => {
    if (d > word.length + 1) return
    if (word[d] === 'j') {
        // console.log(d + 1)
        return
    }
    func2(word, d + 1)
}
func2(input2, 0)

input3 = 'I AM HAPPY!!'.split('')
// 의 짝수번째 자리에 하트를 넣으세요.

const func3 = (word, n) => {
    if (n > word.length + 1) return console.log(word)
    if (!n & 1) {
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

let init = Array.from(Array(10).keys()).map(e => e + 1).sort(() => 0.5 - Math.random())
let a = new Array(10).fill(-1)
// 함수 ???는 init 배열에서 6개를 고른 조합을 계산하여, 만약 그 조합이 [1,2,3,4,5,6] 일 경우 console.log() && return 을 시행한다.
const compare = [1, 2, 3, 4, 5, 6]

const randomFunc = (init, arr, n, i, bigger) => {
    // console.log(arr, n , i)
    if (arr.length === 6) {
        arr = arr.sort((a, b) => a - b)

        //check 
        let val = check(arr, 0, 0)

        console.log(val) // undefiend

        if (val) {
            console.log('1등 당첨', arr, i)
        }
        else {
            a.fill(-1)
            init = init.sort(() => 0.5 - Math.random())
            randomFunc(init,[], 0, i + 1,0)
            return
        }
    }

    if (a[n] < 0) 
    {

        //원소중에 가장 큰 숫자 찾기 사실 문제에 필요없었음
        if (n === 0) 
        {
            bigger = init[n]
            a[n] = bigger
            arr.push(init[n])
            // console.log('else',bigger,init[n],a,arr)

            randomFunc(init, arr, n + 1, i ,bigger)

            arr.pop()
            a[n] = -1
        }
        else if (init[n] > bigger) 
        {
            bigger = init[n]
            a[n] = bigger
            arr.push(init[n])
            // console.log('else',bigger,init[n],a,arr)

            randomFunc(init, arr, n + 1, i ,bigger,)

            arr.pop()
            a[n] = -1
        }
        else
        {

            a[n] = bigger
            arr.push(init[n])
            // console.log('else',bigger,init[n],a,arr)

            randomFunc(init, arr, n + 1, i , bigger)

            arr.pop()
            a[n] = -1
        }

        

    }

}


const check = (arr, n) =>{
    if (n === 5 )
    {
        if(arr[n] === 6) return 1
    return 0 
    }
    
    else if (arr[n] === n + 1) return check(arr, n + 1)
    return 0
    

}

randomFunc(init,[], 0, 0, 0)