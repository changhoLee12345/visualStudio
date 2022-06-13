// main.js
let john = {
    name: 'John'
}

let ary = [john];
john = null;

console.log(ary[0]);