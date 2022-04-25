// array/basic1.js

// reduce(); map()=>새로운 배열, filter()=>새로운 배열.
// reduce()=>결과값이 지정하는 값으로 string, number, 배열.

const numbers = [23, 4, 77, 51, 63, 34, 62, 92];

// 배열요소의 누적합.
let result = numbers.reduce(function (accum, elem, ind, ary) {
  console.log(accum, elem, ind, ary); // 0 23 0 배열요소.
  accum = accum + elem; // 0 + 23 => 23, 27, 104
  return accum;
}, 0);

// 배열요소의 *2 => 새로운 배열.
result = numbers.reduce(function (accum, elem) {
  accum.push(elem * 2); // [46, 8, 154, 102, 126]
  return accum;
}, []);

// filter : 50보다 큰 숫자를 가지는 새로운 배열.
result = numbers.reduceRight(function (accum, elem) {
  if (elem >= 50) {
    accum.push(elem);
  }
  return accum; // 반환되는 값은 다음 순번의 초기값(accum);
}, []);
console.log(result);