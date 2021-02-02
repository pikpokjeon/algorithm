
//https://www.acmicpc.net/problem/1654
// 랜선자르기

// 가지고있음 - K개 랜선, (다른길이들)

// 필요함 - N개 같은길이 랜선들 

// k개 랜선들은 전부 사이즈는 다르지만 결론적으로 같은사이즈  N개를 만들어야함

// 정수길이로만 자른다. 랜선자르거나 만들때 손실되는 길이 없다.

// N개보다 많이 만들어도    N개 만든 것에 포함

// 그중 최대 렌선의 길이를 구하자 (자른애들 사이즈 다 비슷해야함)

let input = `4 11
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


// 백트레킹
const back = (arr,i,now) =>
{

    if(arr.length > 0)
    {
        let sums =  arr.reduce((a,b) => a + b)
        if( sums === 11 && arr.length ===k){
            let store = [] // 조합으로 나누었을 때 각 케이블의 길이
            let kk = [] // 첫번째 자리수 저장
            let av = 0 // 자리수가 같은지 비교하기 위한 변수
            let flag = false // 자리수가 다르면 반복을 멈추게 함
            for(let i = 0; i < arr.length; i++)
            {
                // 첫번째 자리수를 저장한다
                let a = Math.floor(cables[i]/arr[i]).toString()[0]
                kk.push(a)
                // 조합으로 나누었을 때 각자 케이블의 최소 길이 저장
                store.push(Math.floor( cables[i]/arr[i]))

            }
            
            // 나누었을 때 요소들의 조합들이 같은 사이즈 내에 있는지 확인
            for(let j = 0; j < kk.length; j ++)
            {
                if(av === 0) av = kk[j]
                if(av !== kk[j])
                { 
                    // 자리수가 바로 다르면 멈춘다
                    flag = false
                    break
                }
                if(av === kk[j] && kk[j] === kk[0]) {
                    av = kk[j], flag =true
                }
                // 반복 마지막 부분에서 모든 자리수가 같다면,
                // 나누었을 때 비슷한 사이즈의 조합들을 찾고 가장 작은 요소를 찾는다.
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
    // 케이블을 자를 수 있는 경우의 수를 이용하여 백트래킹을 시작한다
    for(const [key,val] of Object.entries(cases))
    {
        
        // 현재 케이블과 같다면
        if(now == key)
        {   
            // 모든 가능한 경우의 수를 시험해본다.
            for(let o = 0; o < val.length -1; o ++)
            {
                // 사용하지 않은 경우의 수를 선택한다
                if(visit[i][o] < 0 )
                {

                    // 방문배열에 사용한 경우의 수를 저장해준다
                    visit[i][o] === val[o]
                    arr.push(val[o])
                    // 다음 케이블로 이동한다.
                    back(arr,i+1,cables[i+1])
                    arr.pop()
                    visit[i][o] === -1
                }

            }    

        }
    }
}

back([],0,cables[0])
