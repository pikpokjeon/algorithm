let points = `7
10
100
200
25
300
20b`.toString().trim().split('\n').map( e=> Number(e))

const n = points.shift()

let ci = n-1
let ps = 1 // 2밟아옴 = 0, 1개만 밟음 = 1,
let maxPoint = points[n-1]
const check = (cidx,num) => cidx - num < 0 ? (cidx) : cidx -= num

while(ci > 0)
{
    const o = maxPoint + points[ci-1]
    const s = maxPoint + points[ci-2]
    if(ci === 1 && ps<0) 
    {
        maxPoint += points[0]
        console.log(maxPoint,ci,ps)

        break
    }
    if(ci === n -1)
    {
         if(o > s) 
         {
            maxPoint = o, ci = check(ci,1),ps = 0
            console.log(maxPoint,ci,ps)
            continue
            
         }
         maxPoint = s, ci = check(ci,2),ps = 1
         console.log(maxPoint,ci,ps)
         continue

    }
    if(ps < 1)
    {
        maxPoint = s, ci = check(ci,2),ps = 1
        console.log(maxPoint,ci,ps)

        continue
    }
    if(o > s) 
    {
       maxPoint = o,ci = check(ci,1),ps = 0
       console.log(maxPoint,ci,ps)

       continue
    }

    maxPoint = s, ci = check(ci,2),ps = 1
    console.log(maxPoint,ci,ps)

}

console.log(maxPoint)
