// string_method.js

const str1 = '1 + 2 * 3';
const str2 = new String('1 + 2 * 3');

console.log(eval(str1));
console.log(eval(str2.valueOf()));

const str3 = ' 문자열 입력 공백 제거 테스트 ';
console.log(str3.trimStart().trimEnd());

let str4 = ' 문자열 입력 공백 제거 테스트 ';


String.prototype.ltrim = function() {
    // console.log(this);
    this.value;
    return this.value.replace(/^\s+/, '');
}
String.prototype.rtrim = () => {
    // console.log(this);
    return String.prototype.replace(/\s+$/, '');
}

console.log(str4.ltrim());
console.log(str4.rtrim());

console.log('end of prog.')