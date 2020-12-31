  const action = {index:3, item : 11}
  const array = [0,1,2,3,4,5]

    ​
    function insertItem(array, action) {
      const a = [
        ...array.slice(0, action.index),
        action.item,
        ...array.slice(action.index)
      ]
      console.log(a)

    }
    ​
    function removeItem(array, action) {
        const b =  [...array.slice(0, action.index), ...array.slice(action.index + 1)]
      console.log(b)

    } 
    
    insertItem(array, action)
