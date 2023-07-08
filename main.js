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

modfnc.setData([{
  name: 'hong',
  age: 20
}, {
  name: 'kim',
  age: 22
}])

let result = modfnc.makeTable();
console.log(result)
document.getElementById('show').append(result);
// console.log(modfnc);