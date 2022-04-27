let obj = {
    name: 'ryon',
    age: 5,
    changeAge() {
        this.age += 1;
    }
}
let refObj = obj;
refObj.changeAge();
obj.changeAge();
console.log(obj.age);

let copyObj = Object.assign({}, obj);
copyObj.changeAge();

console.log('original: ' + obj.age);
console.log('copy: ' + copyObj.age);

let child = Object.create(obj);

obj.score = 20;
console.log(child.score);

let objectSource = {
    item1: "",
    item2: "",
    item3: ""
}

let targetSource = {
    item1: "name",
    item2: "name",
    item3: "name"
}
console.log(targetSource.item1)
let anotherSource = Object.assign(targetSource, objectSource);
console.log(targetSource.item1)
console.log(anotherSource.item1)

let objSource = {
    item1: 'ryon',
    item2: 'apeech',
    item3: {
        group: 'friend',
        age: 3
    }
}
let objClone = Object.assign({}, objSource);
objSource.item1 = 'king';
objClone.item1 = 'queen';
objSource.item3.age = 4;
console.log(objClone.item1);
console.log(objClone.item3)