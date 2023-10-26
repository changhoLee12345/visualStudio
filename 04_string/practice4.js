// practice4.js
// 현재 url의 주소에서 보여지는 페이지의 이름과 확장자를 출력하세요.

console.log(location.href);

const url = location.href;
let fromPos = url.lastIndexOf('/')
let toPos = url.lastIndexOf('.');

console.log('페이지는 ', url.substring(fromPos + 1, toPos), ' 확장자는 ', url.substring(toPos + 1))