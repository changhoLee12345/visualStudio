// 속성기술자로 객체 속성을 정의하기.

// Object.defineProperty(객체명, 속성명, {
//     get: function () {

//     },
//     set: function (변수) {

//     }
// })

let friend = {};
Object.defineProperty(friend, 'age', {
    get: function () {
        return this._age;
    },
    set: function (age) {
        if (age < 0) {
            console.log(age + ' >>> 0 보다 작은 나이.')
        } else if (age >= 100) {
            console.log(age + ' >>> 100 보다 큰 나이.')
        } else {
            this._age = age;
        }
    },
    enumerable: true, // 기본 값: false - Object.key()로 속성 나열 시 해당 속성 표시 여부.
    configurable: true // 기본 값: false - delete 연산자로 속성 키 삭제 가능 여부 설정.
});

friend.age = 10;
friend.age = -1;
console.log(friend.age);
console.log(friend._age);
console.log(Object.keys(friend));
delete friend.age;
console.log(Object.keys(friend));

friend = {
    name: '라이언'
}
Object.defineProperty(friend, 'gender', {
    value: 'male',
    writable: false
})

console.log(friend.gender);
friend.gender = 'female';
console.log(friend.gender);