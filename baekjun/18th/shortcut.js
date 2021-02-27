// https://www.acmicpc.net/problem/1283
// 단축키 지정 출처다국어분류
 
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 2 초	128 MB	628	194	152	33.703%
// 문제
// 한글 프로그램의 메뉴에는 총 N개의 옵션이 있다. 각 옵션들은 한 개 또는 여러 개의 단어로 옵션의 기능을 설명하여 놓았다. 그리고 우리는 위에서부터 차례대로 각 옵션에 단축키를 의미하는 대표 알파벳을 지정하기로 하였다. 단축키를 지정하는 법은 아래의 순서를 따른다.

// 먼저 하나의 옵션에 대해 왼쪽에서부터 오른쪽 순서로 단어의 첫 글자가 이미 단축키로 지정되었는지 살펴본다. 만약 단축키로 아직 지정이 안 되어있다면 그 알파벳을 단축키로 지정한다.
// 만약 모든 단어의 첫 글자가 이미 지정이 되어있다면 왼쪽에서부터 차례대로 알파벳을 보면서 단축키로 지정 안 된 것이 있다면 단축키로 지정한다.
// 어떠한 것도 단축키로 지정할 수 없다면 그냥 놔두며 대소문자를 구분치 않는다.
// 위의 규칙을 첫 번째 옵션부터 N번째 옵션까지 차례대로 적용한다.
// 입력
// 첫째 줄에 옵션의 개수 N(1 ≤ N ≤ 30)이 주어진다. 둘째 줄부터 N+1번째 줄까지 각 줄에 옵션을 나타내는 문자열이 입력되는데 하나의 옵션은 5개 이하의 단어로 표현되며, 각 단어 역시 10개 이하의 알파벳으로 표현된다. 단어는 공백 한 칸으로 구분되어져 있다.

// 출력
// N개의 줄에 각 옵션을 출력하는데 단축키로 지정된 알파벳은 좌우에 [] 괄호를 씌워서 표현한다.

// 예제 입력 1 
// 5
// New
// Open
// Save
// Save As
// Save All
// 예제 출력 1 
// [N]ew
// [O]pen
// [S]ave
// Save [A]s
// Sa[v]e All
let input = `5
New
Open
Save
Save As
Save All`.toString().trim().split('\n')

const tc = Number(input.shift())
let sc = ''
let allkey =''
let what = 0
// 왼쪽에서 오른쪽으로 알파벳을 단축키로 등록 되어있는지 확인한다, 없으면 등록.
for(let i = 0; i < input.length; i++)
{
    let isRegistered = false
    input[i] = input[i].split(' ').map( e=> 
        {   
            // console.log('e',e)
            if(allkey.indexOf(e) > 0 ) return
            e.split('').map( a => 
                {
                    const check = sc.indexOf(a.toUpperCase()) || sc.indexOf(a.toLowerCase())
                    console.log(a,check)
                    if(check < 0 && !isRegistered)
                    {
                        console.log(a)
                        sc += a
                        isRegistered = true
                        what = i
                    }
                })
            console.log(sc,what)
            allkey += input[what]
            
            
        }
    )
    console.log(allkey)

    console.log(input[i].join(''))
}
// 단축키로 등록하지 못하면 그낭 놔둔다

// 차례대로 적용한다, 단축키로 지정되면 [괄호] 씌워서 적용한다.