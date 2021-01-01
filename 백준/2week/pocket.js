const { log } = require("console")
const fs = require("fs")

// 한 칸 띄어쓰기로 구분
// input[0], input[1] 배열에서 꺼내쓰면 된다.
let input = 
//fs
//  .readFileSync("/dev/stdin")
`26 5
Bulbasaur
Ivysaur
Venusaur
Charmander
Charmeleon
Charizard
Squirtle
Wartortle
Blastoise
Caterpie
Metapod
Butterfree
Weedle
Kakuna
Beedrill
Pidgey
Pidgeotto
Pidgeot
Rattata
Raticate
Spearow
Fearow
Ekans
Arbok
Pikachu
Raichu
25
Raichu
3
Pidgey
Kakuna`
.toString()
  .split('\n')
// 첫째 줄부터 차례대로 M개의 줄에 각각의 
// 문제에 대한 답을 말해줬으면 좋겠어!!!. 
// 입력으로 숫자가 들어왔다면 
// 그 숫자에 해당하는 포켓몬의 이름을, 
// 문자가 들어왔으면 그 포켓몬의 이름에 해당하는 번호를
//  출력하면 돼. 
// 그럼 땡큐~
let [leng,qnum] = input[0].split(' ').map(e => Number(e))
let list = []
let quest = []
for (let i = 1; i < leng + 1; ++i) {
    list.push(input[i])
}
for (let i = leng + 1; i < input.length; ++i){
    quest.push(input[i])
}
let answer = []
console.log(list, quest)
quest.forEach( e =>
    {
        if (e >= 0) {
            answer.push(list[e-1])
            
        }
        else {
            answer.push(list.indexOf(e)+1)
        }
    })
console.log(answer.join('\n'))