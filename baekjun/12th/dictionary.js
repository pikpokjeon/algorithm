let input = `1
the cat chased the rat while
the dog chased the cat into the rat house`.toString().split('\n')

const N = input.shift()
let s = input.map( e => e.split(' '))

for(let _ = 0; _ < N; _ ++)
{
    let c = s.shift()
    let d = s.shift()
    let cc = Array.from(new Set(c))
    let dd = Array.from(new Set([...c,...d]))
    let obj = {}
    for(const word of dd)
    {
        obj[word] = cc.indexOf(word) + 1
    }
    let temp1 = ''
    for(let i = 0; i < c.length; i++)
    {
        if(!temp1.includes(c[i]))
        {
            temp1 += ` ${c[i]}`
        }
        else 
        {
            temp1 += ` ${obj[c[i]]}`
        }
    }
    let temp2 = ''
    for(let k = 0; k < d.length; k++)
    {
        if(!temp1.includes(d[k]))
        {
            temp2 += ` ${d[k]}`
        }
        else 
        {
            temp2 += ` ${obj[d[k]]}`
        }
    }
    console.log(temp1)
    console.log(temp2)
}