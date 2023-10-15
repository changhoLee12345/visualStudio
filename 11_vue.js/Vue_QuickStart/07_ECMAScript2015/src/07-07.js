function Person(name, yearCount) {
    this.name = name;
    this.age = 0;
    var incAge = function () {
        this.age++;
    }
    for (var i = 1; i <= yearCount; i++) {
        incAge.apply(this);
    }
}

var p1 = new Person("홍길동", 20);
console.log(p1.name + ', ' + p1.age);