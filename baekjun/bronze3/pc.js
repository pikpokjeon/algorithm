//https://www.acmicpc.net/problem/1453

// 첫째 줄 들어오는 손님 수
// 컴퓨터는 총 100대
// 두번째 줄은 초기에 빈 피시방에 들어오는 사람들이 원하는 자리수
// 원하는 자리에 거절당한 사람들 수는?


//7등	제출번호 49066100	시도1	kw0410	9348kb	124ms	node.js 	490B
const input = `3
1 2 3`.toString().trim().split( '\n' )

const N = Number(input[0])
const wanted_seats = input[1].split( ' ' ).map( Number )
const MAX_COMP = 100

let _wanted = [...wanted_seats]
const occupied = []
const denied =_wanted.reduce( ( acc, cur, i, c ) =>
{
    if (occupied[cur] === cur )
    {
        acc++
    } else if ( !occupied[cur] )
    {
        occupied[cur] = cur
        
    }
    return acc    
}, 0 )


console.log(denied)