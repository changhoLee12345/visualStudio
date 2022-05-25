// map

const map = new Map();
let arr = [1, 2];

map.set('item', 1);
map.set(3, 2);
map.set([1, 2], 3);
map.set(function () {}, 4);

console.log(map.size);
// console.log(map([1, 2]))

map.set(arr, 5);
console.log(map.get(arr));

// map의 순환.
