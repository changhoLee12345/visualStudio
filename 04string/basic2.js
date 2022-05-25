// string/basic2.js

// indexOf(), lastIndexOf() : 찾을 문자열의 위치인덱스 반환. 없으면 -1 반환.
let result = '안녕하세요 홍길동입니다, 대구의 홍길동입니다.'.indexOf('홍길둥');
result = '안녕하세요 홍길동입니다, 대구의 홍길동입니다.'.lastIndexOf('홍길동');
result = '안녕하세요 홍길동입니다,서울의 홍길동, 대구의 홍길동입니다.'.indexOf('홍길동', 15);

let str1 = '안녕하세요 홍길동입니다,서울의 홍길동,부산의 홍길동, 대구의 홍길동입니다.';
let position = str1.indexOf('부산'); // '부산'의 위치인덱스.
result = str1.indexOf('홍길동', position);

// charAt(인덱스) : 인덱스위치의 문자 반환.
let str2 = str1.charAt(result);

// toLowerCase(), toUpperCase() : 문자변경.
let str3 = 'Lorem ipsum DOLOR sit amet consectetur dolor';
console.log(str3.toUpperCase().toLowerCase());

// includes('찾을 문자열') : true/ false
result = str3.includes('dolors');
console.log(result);

// search('찾을 문자열') 추가기능: search(정규표현식); 찾을 문자열의 인덱스 반환.
// 정규표현식 오브젝트 / /(new RegExp()), 배열 [](new Array(1,2)), 
result = str3.toLowerCase().search('dolor');
result = str3.search(/dolor/i);
console.log(result);

// match('찾을 문자열') : 문자열 or null 반환.
let str4 = 'bad MORNING, goodmorning, GOOD AFTERNOON, good evening, and good night';
result = str4.match('goods');
result = str4.match(/good\s\w+/gi); // s : 공백. w : 문자하나.
console.log(result);

// replace('찾을 문자열', '바꿀 문자열');
result = str4.replace('good', 'better');
result = str4.replace(/good/ig, 'better');
result = str4.replace(/\W/ig, '-'); // W : 문자 이외. d : 숫자, D : 숫자 이외.
result = 'morning1 moning12 morning123'.replace(/\D/g, '');

let sso = ['970101-1234567', '970101 2234567', '9701013234567', '970101/4234567'];
sso.forEach(num => console.log(num.replace(/\D/g, '')));

console.log(result);

// 문자열 합치기: + , concat()
console.log('hello' + ' world');
console.log('hello'.concat(' world', '!!', ' welcome'));
