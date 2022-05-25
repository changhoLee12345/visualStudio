// 08객체의 이해.

// 객체의 참조와 복사, 상속의 이해.

let originalObj = {
    name: 'ryon',
    age: 5,
    change: function () {
        this.age += 1;
    }
}

let referenceObj = originalObj;
referenceObj.age = 6;
referenceObj.change();

console.log(originalObj);

// 객체의 복사. Object.assign()
let copyOby = Object.assign({}, originalObj);
copyOby.change();

console.log('originalObj=> ', originalObj, 'copyOby=> ', copyOby)

console.clear();
// 객체의 상속. Object.create()
let childObj = Object.create(originalObj);
// originalObj.age = 10;
childObj.age = 10;

console.log(childObj.age)
console.log(originalObj.age)

// Object.freeze()
let obj = {
    name: 'ryon',
    age: 5,
    changeAge() {
        this.age += 1
    }
}
Object.freeze(obj);
obj.age = 11;
console.log(obj.age);