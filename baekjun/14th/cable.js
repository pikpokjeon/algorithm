
//https://www.acmicpc.net/problem/1654
// 랜선자르기

// 가지고있음 - K개 랜선, (다른길이들)

// 필요함 - N개 같은길이 랜선들 

// k개 랜선들은 전부 사이즈는 다르지만 결론적으로 같은사이즈  N개를 만들어야함

// 정수길이로만 자른다. 랜선자르거나 만들때 손실되는 길이 없다.

// N개보다 많이 만들어도    N개 만든 것에 포함

// 그중 최대 렌선의 길이를 구하자 (자른애들 사이즈 다 비슷해야함)

let input = `1 11
802
743
457
539`.toString().split('\n')

const [k, n] = input.shift().split(' ').map(e => Number(e))
const cables = input.map(e => Number(e)).sort()

let cases = {}

// 각각 케이블에서
// N 번 만큼 각 케이블들을 나눠보고 떨어지는 경우 케이블스에 저장한다

for (let i = 2; i < n; i++) 
{
    for (let c = 0; c < k; c++) 
    {
        if (cables[c] % i < 3) //나누어 떨어진다!(소숫점 첫째까지 허용)
        {
            if(!cases[cables[c]]) cases[cables[c]] = []
            const doubleCheck = cases[cables[c]].includes(i)
            if(!doubleCheck)
            {   
                cases[cables[c]].push(i)
            }
        }
    }
}
// const m = new Map(Array.from(cases))
// 나눈 횟수가 11이 되도록 경우의 수를 구한다.
// 백트랙킹으로 합해서 11이 되는 배열을 만든다
// 각 케이블들의 가능한 나눔의 수를 배열에 추가해보며 11이 되었을 때 반복을 중단한다
let visit = Array.from(Object.values(cases)).map( e => e.map( a => -1))

// let visit = Object.fromEntries(cases)
// console.log('visit',visit)
let min = 0

const back = (arr,i,now) =>
{

    if(arr.length > 0)
    {
        let sums =  arr.reduce((a,b) => a + b)
        if( sums === 11 && arr.length ===k){
            let store = []
            let kk = []
            let av = 0
            let flag = false
            for(let i = 0; i < arr.length; i++)
            {
                let a = Math.floor(cables[i]/arr[i]).toString()[0]
                kk.push(a)
                store.push(Math.floor( cables[i]/arr[i]))

            }
            console.log(arr,store,'-------',sums)
            

            for(let j = 0; j < kk.length; j ++)
            {
                if(av === 0) av = kk[j]
                if(av !== kk[j])
                { 
                    flag = false
                    break
                }
                if(av === kk[j] && kk[j] === kk[0]) {
                    av = kk[j], flag =true
                }

                if(j === kk.length-1 && flag)
                {   console.log('|------------------------------------------------------------|')
                    console.log('802cm 랜선에서 4개, 743cm 랜선에서 3개, 457cm 랜선에서 2개, \n539cm 랜선에서 2개를 잘라내 모두 11개를 만들 수 있다.')
                    console.log('정답-------->',arr)
                    console.log('만약 가장작은거 찾은거면..->',Math.min.apply(null,store))
                    console.log('|------------------------------------------------------------|')
                
                }
            }


            
        } 


    }
    // if(i === k) return console.log('finish----->',arr)
    for(const [key,val] of Object.entries(cases))
    {
        
    
        if(now == key)
        {        
            for(let o = 0; o < val.length -1; o ++)
            {

                if(visit[i][o] < 0 )
                {

                    
                    visit[i][o] === val[o]
                    arr.push(val[o])
                    back(arr,i+1,cables[i+1])
                    arr.pop()
                    visit[i][o] === -1
                }

            }    

        }
    }
}

back([],0,cables[0])
