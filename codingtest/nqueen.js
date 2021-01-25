
// [1,7,4,6,8,2,5,3]
// [1,7,5,8,2,4,6,3]
// [2,4,6,8,3,1,7,5]
// [3,1,7,5,8,2,4,6]
// [4,1,5,8,2,7,3,6]
// [5,1,4,6,8,2,7,3]
// [5,1,8,4,2,7,3,6]
// [5,1,8,6,3,7,2,4]
// [5,3,1,7,2,8,6,4]
// [5,7,1,4,2,8,6,3]
// [6,3,1,8,4,2,7,5]
// [7,1,3,8,6,4,2,5]

const n = Number('8'.toString())
const cross = n + (n-1)
let board = Array(n).fill([]).map(_ => [...new Array(n).fill(-1)])
const create_diagonal = (right,left,board) =>
{

    for(let y = 0; y < n; y++)
    {
        for(let x = left ; x >= 0; x--)
        {
            if( x === y){
                if(left - y < 0) continue
                if(left + y > n) continue
                board[x][left - y] = ' '
                console.table(board)
            }
            // board[x][left - y] = ' '

        }
        for(let z = y; z < n ; z ++)
        {
            if( z === y){
                if(left - y < 0) continue
                if(left + y > n) continue
                board[left+y][z] = '_'
                console.table(board)
            }
        }
    }


    // for(let y = 0; y < n; y++)
    // {
    //     for(let x = y ; x >= 0; x--)
    //     {
    //         if( x === y){
    //             if(right - y < 0) continue
    //             if(right + y > n) continue
    //             board[x][right + y] = '+'
    //             console.table(board)
    //         }
    //         // board[x][right - y] = ' '

    //     }
    //     for(let z = y; z < n ; z ++)
    //     {
    //         if( z === y){
    //             if(right - y < 0) continue
    //             if(right + y > n) continue
    //             board[right+y][z] = '='
    //             console.table(board)
    //         }
    //     }
    // }



    return board
}

// 2에서 오른쪽으로세로 5에서 왼쪽으로가로 대각선
console.table(create_diagonal(6,6,board))



