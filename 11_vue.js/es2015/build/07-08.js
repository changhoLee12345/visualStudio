"use strict";

function Person(name, yearCount) {
    var _this = this;

    this.name = name;
    this.age = 0;
    var incAge = function incAge() {
        _this.age++;
    };
    for (var i = 1; i <= yearCount; i++) {
        incAge();
    }
}

var p1 = new Person("홍길동", 20);
console.log(p1.name + ', ' + p1.age);