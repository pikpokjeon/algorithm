//4 => 1+1+1+1 / 1+1+2/2+1+1/2+2

const func = (n) =>
{
    if ( n === 1 ) return [[1]]
    else if ( n === 2 ) return [[2],[1,1]]
    else 
    return [
        ...func(n-1).map(e => [1, ...e]),
        ...func(n-2).map(e => [2,...e])
    ]
}

console.log(func(4))

const a = [[2]]
const b = [...a.map(e => [1,...e])]

console.log(b)