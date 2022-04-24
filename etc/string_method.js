// string_method.js

const str1 = '1 + 2 * 3';
const str2 = new String('1 + 2 * 3');

console.log(eval(str1));
console.log(eval(str2.valueOf()));

const str3 = ' 문자열 입력 공백 제거 테스트 ';
console.log(str3.trimStart().trimEnd());

let str4 = ' 문자열 입력 공백 제거 테스트 ';


console.log('end of prog.')

let result = ' 문자열 입력    공백 제거 테스트 '.split(' ').filter(el => el != '').join(' ');
console.log(result);

let res1 = 'hello';
let res2 = new String('hello');

console.log(res1 == res2);
console.log(res1 === res2);

result = 'This is the only one story'.slice(10, -8);

const num1 = 123;
const num2 = 123.45;
const bool = true;
const str = '문자열타입';
const arr = [1, 2, 'a', 'b', 3];
const obj = {
    key: 'data',
    value: 15
}
console.log(obj.toString());
console.log(obj.key.toString());
console.log(obj.value.toString());

result = "bad MORNING, GOOD AFTERNOON, good evening, and good night".match(/good\s\w+/gi);
// result = "bad MORNING, GOOD AFTERNOON, good evening, and good night".toLocaleLowerCase().match('good');

console.log(result);

const ssn = ['970102-1234567', '9805052345678', '990101 1234567', '990101/1233567'];
ssn.forEach(no => {
    let num = no.replace(/[\W]/g, '')
    console.log(num);
})


result = "bad MORNING, GOOD AFTERNOON, good evening, and good night".replace(/good/gi, 'better');
console.log(result);
result = "bad MORNING, GOOD AFTERNOON, good evening, and good night".replace('good', 'better').replace('GOOD', 'better');
console.log(result);

let strAry = ['good', ' ', 'morning', '!'];
console.log(''.concat(...strAry));

let tagStr = 'good';
result = taggedFunc `${tagStr} morning, ${tagStr} afternoon, ${tagStr} evening, and ${tagStr} night`;
console.log(result);

function taggedFunc(strings, exp) {
    let ret = '';
    console.log(strings, exp)
    for (let idx = 1; idx < strings.length; idx++) {
        if (idx < strings.length - 1) {
            ret += 'bad' + strings[idx];
        } else {
            ret += 'moon' + strings[idx];
        }
    }
    return ret;
}