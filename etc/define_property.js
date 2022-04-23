// define_property.js

const defaltAge = 10;

let friend = {
    name: 'ryon'
}

Object.defineProperty(friend, 'age', {
    get: function () {
        return this._age;
    },
    set: function (age) {
        if (age < 0 || age >= 100) {
            this._age = this._age ? this._age : defaltAge;
        } else
            this._age = age;

    },
    enumerable: true,
    configurable: true
})

friend.age = 20;
friend.age = -10;
console.log(friend.age);
console.log(friend._age);

console.log(Object.keys(friend));

