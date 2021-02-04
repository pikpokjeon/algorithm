  
// 비동기 함수 동기적으로 실행하는 연습

// 1. 
// 비동기처럼 작동하는 함수. 프로미스객체로 만든다.
const asyncFunc = n => async m => new Promise(res => {
  console.log(n,m,'started');
    return setTimeout(() => res(n), m)
});
// 프로미스의 반환값을 이용하는 다른 함수
function log(value) {
  console.log(`Finished ${value}`);
  return value;
}
// 실행할 순서대로 배열에 넣어준다.
const promiseArry = (x, y) => async asyncFunc =>{
  const [a,b,c,d] = [await asyncFunc(x)(y), await asyncFunc(x - 3)(y - 3000), 
    await asyncFunc(x - 4)(y - 4000), await asyncFunc(x - 5)(y - 5000), ]
  // 배열에 프로미스를 가져왔지만 아래처럼 호출하면 함수실행직후 작동하지 않는다. !! 아래 방법을 참고
  log(a);log(c)
}
// 함수 호출
promiseArry(5, 5000)(asyncFunc)



// 2. 프로미스가 반환되며 해당 함수가 종료된 직후 
// 반환값을 이용하여 즉시 다른 함수를 호출하기

// 비동기처럼 작동하는 함수를 만들어준다.
const promiseFunc = (n, delay) =>
  new Promise((r) => {
    console.log(`Started ${n}. Will finish after ${delay}ms`);
    return setTimeout(() => r(n), delay);
  });

// 해당 함수의 프로미스 반환 값을 사용할 다른 함수를 짜본다.
function logAndReturn(value) {
  console.log(`Finished ${value}`);
  return value;
}

// 전체 비동기 함수(프로미스)를 호출하는 부분
const arry = async (delay) => [
  // then을 사용하므로써, 함수 실행후 반환값을 다른 함수에 사용하기위해
  // 배열 내부에서 메서드 체이닝으로 함수를 호출
  await promiseFunc(0, delay).then(logAndReturn),  
  await promiseFunc(1, delay - 2000).then(logAndReturn),
  await promiseFunc(2, delay - 4000).then(logAndReturn)
];



// 3.
// 다음번엔 generator를 사용해서 공부
// function* main2 (arr) => {
//   for (const element of arr) {
//     yield element
//   }
//   yield promiseFunc()
// } 
