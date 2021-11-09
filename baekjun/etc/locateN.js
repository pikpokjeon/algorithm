// 8각형 각 변에 팀의 위치로 지정하기
// 0번째 팀 입장시 제한숫자 내 랜덤숫자 인덱스 위치
// 패턴에 따라 좌우 돌아가며 위치 배정

const MAX = 8
const teams = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',"no","no2"]

const getRandomIdx = ( max ) =>
    Math.floor( Math.random() * (max-1) )
    
const plusOrMinus = () => Math.random() < 0.5? -1 :1

const getIdxOrder = ( lastIdx, count ) =>
{
    const adds = count % 2 !== 0 ? 4 :count ===4? 1 : 2
    const gap = lastIdx + ( plusOrMinus() * adds )
    return (gap <0 ? 8 : gap > 7 ? -8 : 0) + gap
}

const teamsOrder = ( teams,max ) => teams.reduce( ( acc, cur, i, arr ) =>
{
    if ( max <= i ) return acc
    const orderIdx = i < 1 ? getRandomIdx( max ): getIdxOrder( acc.indexOf( arr[i - 1] ), i )
    acc[orderIdx] = cur
    return acc    

}, Array( max ).fill( -1 ) )


console.log(teamsOrder(teams,MAX))