// string/pratice.js

let str1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, magnam molestiae eos aperiam quod reiciendis delectus exercitationem distinctio magni reprehenderit eius quidem esse perspiciatis necessitatibus non, fuga consectetur soluta facere?';
// 단어의 길이가 10개 이상인 값을 골라내서
// consectetur, adipisicing, exercitationem, .....
console.log('hello'.length);
let result = str1.split(' ').filter(el => el.length >= 10).join(',');
console.log(result);