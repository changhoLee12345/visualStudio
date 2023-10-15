'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var s1 = new Set();
s1.add('apple');
s1.add('pear');
s1.add('apple');
s1.add('grape');

console.log(s1);

var john = new Set(['apple', 'grape', 'pear']);
var susan = new Set(['pieapple', 'kiwi', 'pear']);

var union = new Set([].concat(_toConsumableArray(john.values()), _toConsumableArray(susan.values())));
console.log(union);

var intersection = new Set([].concat(_toConsumableArray(john.values())).filter(function (e) {
  return susan.has(e);
}));
console.log(intersection);

var diff = new Set([].concat(_toConsumableArray(john.values())).filter(function (e) {
  return !susan.has(e);
}));
console.log(diff);