var s1 = new Set();
s1.add('apple');
s1.add('pear');
s1.add('apple');
s1.add('grape');

console.log(s1);

var john = new Set(['apple', 'grape', 'pear']);
var susan = new Set(['pieapple', 'kiwi', 'pear']);

var union = new Set([...john.values(), ...susan.values()]);
console.log(union);

var intersection = new Set([...john.values()].filter(e => susan.has(e)));
console.log(intersection);

var diff = new Set([...john.values()].filter(e => !susan.has(e)));
console.log(diff);