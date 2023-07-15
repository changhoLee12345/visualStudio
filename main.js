// main.js
// let ryon = apeach = con = '';
// let arrNames = ['ryon', 'apeach', 'con']
// let {
//     ryon,
//     apeach,
//     con
// } = 'family';
// console.log(ryon);

import modfnc from './module/module.js';

const data = [{
  name: 'hong',
  age: 20
}, {
  name: 'kim',
  age: 22
}];

let table = new Table(data);
document.getElementById('show').append(table);
// console.log(modfnc);