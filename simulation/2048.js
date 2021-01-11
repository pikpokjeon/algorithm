const ip =`4 
1 1 9 1
2 2 0 2
1 4 4 1
2 2 9 2`.toString().split('\n')

const N = Number(ip.shift())
let arr =  ip.map( e => e.split(' ').map(i => Number(i)))
console.log(N,ip,arr)

const pushing = () => 
{
    for(let y = 0; y< N; y++)
    {
        for( let x = N-1; x< N; x--)
        {
            if(arr[y][x] == arr[y][x-1])
            {
                arr[y][x-1] = arr[y][x-1] + arr[y][x]
                if(arr[y][x-2] == 0)
                {
                    arr[y][x-2] == arr[y][x-1]

                    console.log(arr)
                }
            }
        }
    }
}


pushing()