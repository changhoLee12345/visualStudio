// date.js

let today = new Date();

console.log(today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2));

today.setFullYear(2022, 3, 1);
today.setHours(10, 10, 10);
console.log(today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2));
