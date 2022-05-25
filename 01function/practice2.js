// practice2.js

const person1 = {
  fullName: 'Hong',
  age: 20,
  height: 175.3
}
const person2 = {
  fullName: 'Hwang',
  age: 22,
  height: 178.4
}
const person3 = {
  fullName: 'Park',
  age: 25,
  height: 165.3
}

const persons = [person1, person2, person3];

let avgAge = 0;
let sum = 0;
for (let person of persons) {
  sum += person.age;
}
avgAge = sum / persons.length;
console.log(`평균나이: ${avgAge}`)

console.clear();
let avgAgeFnc = function (val) {
  sum += val.age;
};
let avgHeightFnc = function (val) {
  sum += val.height;
}
sum = 0;
persons.forEach(avgAgeFnc);
avgAge = sum / persons.length;
console.log(`평균키: ${avgAge}`)

let tag = "";
// * 이름, 나이, 키
// * 이름, 나이, 키
// * 이름, 나이, 키
let allPerson = function (val, idx) {
  if (idx == 0) {
    tag += '<ul>';
  }
  tag += `<li> ${val.fullName}, ${val.age}, ${val.height} </li>`;
  if (idx == persons.length - 1) {
    tag += '</ul>';
  }
};
let over170 = function (val, idx) {
  if (idx == 0) {
    tag += '<ul>';
  }
  if (val.height >= 170)
    tag += `<li> ${val.fullName}, ${val.age}, ${val.height} </li>`;
  if (idx == persons.length - 1) {
    tag += '</ul>';
  }
}
persons.forEach(function (val, idx) {
  console.log(val, idx);
  if (idx == 0) {
    tag += '<ul>';
  }
  if (val.height >= 170)
    tag += `<li> ${val.fullName}, ${val.age}, ${val.height} </li>`;
  if (idx == persons.length - 1) {
    tag += '</ul>';
  }
});
console.log(tag);
document.write(tag);