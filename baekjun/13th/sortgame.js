// 문제
// 홍준이는 소트 게임을 하려고 한다. 소트 게임은 1~N으로 이루어진 N자리의 순열을 이용한다. 이 게임에선 2보다 크거나 같고 N보다 작거나 같은 수 K가 주어진다.
// 으면 5 2 3 4 1이 된다. (뒤집는 다는 소리는 순서를 역순으로 바꾼다는 것)

// 홍준이가 어떤 수를 뒤집는다고 하면, 그 수부터, 오른쪽으로 총 K개의 수를 뒤집는 것이다.

// 예를 들어 순열이 5 4 3 2 1 이었고, 여기서 K가 3일 때, 4를 뒤집
// 반드시 K개의 수를 뒤집어야하기 때문에, 처음 상태에서 2나 1을 선택하는 것은 불가능하다.

// 홍준이는 입력으로 들어온 순열을 오름차순으로 만들려고 한다. 오름차순으로 만들면 게임이 끝난다.

// 홍준이가 게임을 빨리 끝내려고 할 때, 수를 최소 몇 개 선택해야 하는지 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 순열의 크기 N과 K가 주어진다. N은 2보다 크거나 같고, 8보다 작거나 같다. 둘째 줄에 순열에 들어가는 수가 주어진다.

// 출력
// 첫째 줄에 정답을 출력한다. 만약 오름차순으로 만들 수 없으면 -1을 출력한다.


let input = `3 3
3 2 1`.toString().split('\n')
// let input = `5 3
// 5 4 3 2 1`.toString().split('\n')

let [n, k] = input.shift().split(' ').map( e => Number(e))
let list = input.map( e => e.split(' ').map( e=> Number(e))).flatMap( e => e)
// 0인덱스 기준 + 2 길이 까지 소트가 가능하면 무조건 한다.
// +2 길이 안에 가장 큰 수를 기준으로 뒤집는다.

//비교 대상
// const target = list.sort()

const findTarget = (arr) =>
{
    let MAX = 0
    for(let i = 0; i < n-k+1; i++)
    {
        if(arr[i] > MAX) MAX = arr[i]
    }
    return MAX
}

const main = () =>
{
    let count = 0
     let flag = 0
 while(flag < 1)
 {
     let mx = findTarget(list)
     let mxidx = list.indexOf(mx)
     //가장 큰 수를 기준으로 오른쪽 +2칸 뒤집는다. 큰수는 +2인덱스로 간다
     list[mxidx] = list[mxidx+2]
     list[mxidx+2] = mx
    //  console.log(mx,mxidx)
     flag = compare(list,0)
     count +=1

}
return console.log(count)

}

const compare = (arr, i) =>
{

    // 재귀로 체크
    console.log(arr, i)
    if(n === i)
    {
        if(arr[i-1] === i ) return i
    }
    else if (arr[i] === i + 1) return compare(arr,i+1)
    return 0

    // 포문으로 체크
    // let check = 0
    // for(let i = 1; i <=n; i ++)
    // {
    //     if(arr[i-1] === i) check ++
    // }
    // if(check === n) return check
    // else return 0
}
main()