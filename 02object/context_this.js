// context.js
// this의 컨텍스트 범위와 바인딩.
// this가 오브젝트 안에서 사용이 되면 오브젝트를 가리키고
// 함수안에서 사용이 되면 전역객체(window)가 된다. ***중요***

let obj = {};
obj.act = function () {
    this.value = 'default value';

    function innerAct() {
        this.value = 'innerAct value';
        console.log("this.value: " + this.value);
    }
    // 객체 참조를 넘기는 act() 메서드 안의 함수
    function innerReact(caller) {
        caller.value = 'innerReact value';
        console.log("this.value: " + this.value);
        console.log("caller.value: " + caller.value);
    }
    innerAct();
    console.log("obj 객체의 this.value: " + this.value);

    innerReact(this);
    console.log("obj 객체의 this.value: " + this.value);
}


obj.act = function () {
    this.value = 'default value';
    outerFunc();
    outerFuncRef(this);
}

function outerFunc() {
    this.value = 'outerFunc value';
    console.log('outerFunc this.value: ' + this.value);
    console.log('obj.value: ' + obj.value);
}


function outerFuncRef(callRef) {
    callRef.value = 'outerFuncRef value';
    console.log('outerFuncRef this.value: ' + this.value);
    console.log('callRef.value:' + callRef.value);
    console.log("obj.value: " + obj.value);
}
obj.act();
console.log("전역 객체의 this.value:  " + this.value);