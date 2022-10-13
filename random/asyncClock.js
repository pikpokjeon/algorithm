const C = (initC) => {

    const a = []
    let i = 0
    let delay = 0
    const promiseF = (i, time, count) => new Promise((res) => {
        delay += time
        console.log(`Register Clock ${i}th, delay${time},---${count}`)
        return setTimeout(() => {
            return res({ i, count })
        }, delay)
    })

    const done = ({ count }) => {
        console.log(`${i}th---done.  ${count}`)
    }


    const set = async (initCount, initTime) => {
        a.push(  promiseF(i, initTime, initCount))
       a.forEach(async(f) => await f.then(done))
       a.shift()
    }

    if(initC) set(0,initC,1000) 
    setInterval(()=>{
        i++
        console.log(i)
    },1000)
    return {set}

}

const c = C(5)  //0sec

c.set(20,2000)//2sec
c.set(10,1000)//3sec
c.set(50,5000)//8sec
c.set(70,7000)//15sec