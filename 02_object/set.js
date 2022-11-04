// set

const s1 = new Set();
const s2 = new Set();

s1.add('라이언')
s1.add('어피치')
s1.add('프로도')

s2.add('콘')
s2.add('무지')
s2.add('프로도')

if (s1.has('프로도') && s2.has('프로도')) {
    console.log('두 집합에 모두 있음.')
    s2.delete('프로도');
}

// s1.forEach((val, key) => console.log(key + ', ' + val));
// s2.forEach((val, key) => console.log(key + ', ' + val));

let arr = ['라이언', '프로도', '무지']
let s = new Set(arr);
console.log(s.size);

s.forEach((val, key) => console.log(val + ', ' + key));

for (let [key, val] of s.entries()) {
    console.log(key + ', ' + val)
}

for (let val of s.keys()) {
    console.log(val)
}

// object type.
let sobj = new Set();
sobj.add({
    name: 'hong',
    age: 10
})
sobj.add({
    name: 'hong',
    age: 10
})
console.log(sobj.size);