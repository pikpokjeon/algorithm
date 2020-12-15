
const a = n => async m => new Promise( r => setTimeout(() => 
 r( console.log(n)) , m ));


// const f =  (x) => (y) => {
   const arry = async(x,y) => [ await a(x)(y),await a(3)(y-2000),await a(4)(y-1000)]
    // await arry.forEach(e => e);
  // }
  arry(5,5000)
  // arry(1,1000)
// const arry = x => y => a(x)(y) 
// arry.filter( e =>)

// arry.map( e => (x) => (y) => { e(1)(1000)})



// a(1000)


