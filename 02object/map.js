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
map.clear();

map.set('itema', 1);
map.set('itemb', 2);
map.set('itemc', 3);
console.log('길이: ' + map.size);

map.forEach(function (val, key) {
    console.log(key + ' ' + val)
})

for (let [key, val] of map.entries()) {
    console.log(key + ' ' + val)
}

for (let key of map.keys()) {
    console.log(key)
}

for (let key of map.values()) {
    console.log(key)
}


//////////////////////////
let friends = [
    ['프로도', 3],
    ['라이언', 5],
    ['어피치', 4]
]

let frMap = new Map(friends);
let newFriends = Array.from(frMap);

console.log(frMap);
console.log(newFriends)