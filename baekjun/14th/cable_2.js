//https://www.acmicpc.net/problem/1654

// you have K count cables
// you need to make N count cables from K cables
// N cables should be in same length
// K cables sizes all differ but you gotta make N cables with same length
// find the maximum cable length from N cables made with K cables
// when the cable is float number,
// remove the decimal point

// K and N
// K cables list
let input = `4 11
802
743
457
539`
  .toString()
  .split("\n");

const [k, n] = input
  .shift()
  .split(" ")
  .map((e) => Number(e));
const cables = input.map((e) => Number(e)).sort();

//case storage
let cases = {};

for (let i = 2; i < n; i++) {
  for (let c = 0; c < k; c++) {
    if (cables[c] % i < 3) {
      if (!cases[cables[c]]) cases[cables[c]] = [];
      const doubleCheck = cases[cables[c]].includes(i);
      if (!doubleCheck) {
        cases[cables[c]].push(i);
      }
    }
  }
}
// memoization array for backtracking
let visit = Array.from(Object.values(cases)).map((e) => e.map((a) => -1));

// backtracking arry of combination, count, current cable
const back = (arr, i, now) => {
  if (arr.length > 0) {
    let sums = arr.reduce((a, b) => a + b);
    if (sums === 11 && arr.length === k) {
      let store = [];
      //array to check if the elements in same range
      let kk = [];
      // 234 => 2
      let av = 0;
      // check if elements in combination in same range in size
      let flag = false;
      for (let i = 0; i < arr.length; i++) {
        let a = Math.floor(cables[i] / arr[i]).toString()[0];
        kk.push(a);
        store.push(Math.floor(cables[i] / arr[i]));
      }
      console.log(arr, store, "-------", sums);

      for (let j = 0; j < kk.length; j++) {
        if (av === 0) av = kk[j];
        if (av !== kk[j]) {
          flag = false;
          break;
        }
        if (av === kk[j] && kk[j] === kk[0]) {
          (av = kk[j]), (flag = true);
        }

        if (j === kk.length - 1 && flag) {
          console.log(
            "|------------------------------------------------------------|"
          );
          console.log(
            "802cm cable- 4, 743cm cable- 3, 457cm cable- 2, \n539cm cable- 2, so total 11times you can divide"
          );
          console.log("answer-------->", arr);
          console.log(
            "if to find the smallest number you can divide any cables..->",
            Math.min.apply(null, store)
          );
          console.log(
            "|------------------------------------------------------------|"
          );
        }
      }
    }
  }
  // main backtracking method
  for (const [key, val] of Object.entries(cases)) {
    if (now == key) {
      for (let o = 0; o < val.length - 1; o++) {
        // only when not used
        if (visit[i][o] < 0) {
          visit[i][o] === val[o];
          arr.push(val[o]);
          back(arr, i + 1, cables[i + 1]);
          arr.pop();
          visit[i][o] === -1;
        }
      }
    }
  }
};

back([], 0, cables[0]);
