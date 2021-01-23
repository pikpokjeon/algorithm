function solution(s){
    let ss = s.split('')
    let curr = ''
    let acc = ''
    let c = 0
    let o = []
    let idx = -1
    for (let i = 0; i < ss.length; i++) {
        if (s.includes(acc)) {
            // console.log('yes',acc)
        }
        if (curr !== ss[i]) {
            acc += ss[i]
            curr = ss[i]
            o.push([curr, c])
            c = 0
            idx += 1
        }
        o[idx][1] += 1



    }
    let temp = ''
    let rest = ''
    let ct = 0
    for (let j = 0; j < o.length; j++) {
        if (o[j][0] === temp[0]) {
            ct += 1
            o.push([temp, ct])
            ct = 0
            temp += o[j][0]

        }


        if (o[j][1] === 1) {

            if (o[j][0] !== temp[0]) {


                temp += o[j][0]
                if (o[j][0] === temp[0]) {
                    ct += 1
                }
                rest += o[j][0]
            }
        }

    }

    let long =1
    o.map(e => {if(e[0].length > long) long = e[0].length})
    console.log(long)
    console.log(o)

    //     let all = []
    //     let tp = ''

    //     for (let k = 0; k < o.length; k++) {
    //         if (o[k][1] === 1 && o[k][0].length === 1) {
    //             tp += o[k][0]
    //             // continue
    //         }
    //         else if (o[k][1] > 1 && o[k][0].length === 2) {

    //             tp += 2
    //             tp += o[k][0]
    //             // continue
    //         }
    //         else if (o[k][1] > 1 && o[k][0].length === 3) {
    //             tp += 3
    //             tp += o[k][0]
    //         }

    //         all.push(tp)
    //         tp = ''
    //     }
    //     // console.log(all)
    //     // console.log(o)
    //     // console.log(tp)
    // }
}

["aabbaccc",	//7
    "ababcdcdababcdcd",	//9
    "abcabcdede",	//8
    "abcabcabcabcdededededede",	//14
    "xababcdcdababcdcd"].map(e => solution(e))