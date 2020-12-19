const directionArry = [6, 6, 6, 4, 4, 4, 2, 2, 2, 0, 0, 0, 1, 6, 5, 5, 3, 6, 0]
let storage = []
let storageOfMovement = [[0,0]]

let currentPosition = [0,0];


//현재위치와 이동번호로 이동 히스토리 계산
const moveTo = (num,currentPosition) =>remainStayPoints=> remainHistoryRoutes => storage => 
  {
    const x = [0,1,1,1,0,-1,-1,-1]
    const y = [1,1,0,-1,-1,-1,0,1]
    // currentPosition = [currentPosition[0] + x[num], currentPosition[0] + y[num]]
    const position = [currentPosition[0] + x[num], currentPosition[1] + y[num]]
    
    console.log("position :", position)
    console.log("currentPosition :", currentPosition)
    currentPosition = position

    let stayPoint  = remainHistoryRoutes(position,storage).reduce( (e,a)=> [e[0]+a[0],e[1]+a[1]])

    remainStayPoints(stayPoint,storageOfMovement)

    // console.log('remainStayPoints',remainStayPoints(stayPoint,storageOfMovement))
    console.log('remainStayPoints',new Set(remainStayPoints(stayPoint,storageOfMovement)))

    // const moveLog =Array.from(remainStayPoints(stayPoint,storageOfMovement));
    const moveLog = new Set(remainStayPoints(stayPoint,storageOfMovement));
    let count = []

      console.log(Array.from(moveLog).map( e => (e = `move:${  [e[0],e[1]]  }`) ))   
      
  

    console.log("stayPoint :",stayPoint)
    return currentPosition
  }

const remainStayPoints = (stayPoint,storageOfMovement) => { storageOfMovement.push(stayPoint); return storageOfMovement}
const remainHistoryRoutes = (position,storage) => 
  {

      // console.log("position : ",position);
    storage.push(position)
    let count = 1;
    // let arry = Array.from([[],[],[],[],[]], e => new Array(position.length).fill(0))
    
    console.log('history :',storage);
    // console.log('history :',storage, arry);
    return storage
  }

const computeMovement = (directionArry,moveTo,currentPosition) => storage =>
  {
    // console.log(moveTo)
    const a = directionArry.map( e => {
      console.log(e)
      moveTo(e,currentPosition)(remainStayPoints)(remainHistoryRoutes)(storage)
    })
    
    // return a;
  }

// moveTo(2)(currentPosition)(remainHistory)
computeMovement(directionArry,moveTo, currentPosition)(storage)
// remainHistory()
