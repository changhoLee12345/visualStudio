// main.js
// let ryon = apeach = con = '';
// let arrNames = ['ryon', 'apeach', 'con']
// let {
//     ryon,
//     apeach,
//     con
// } = 'family';
// console.log(ryon);

import modfnc from './module.js';
modfnc.setData([{
    name: 'hong',
    age: 20
}, {
    name: 'kim',
    age: 22
}])
console.log(modfnc.makeTable())
document.getElementById('show').append(modfnc.makeTable());
// console.log(modfnc);