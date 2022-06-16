// context에 이어서..

let obj = {};
obj.act = function () {
    this.value = 'default value';
    let oF = outerFunc.bind(this);
    oF();
}

function outerFunc() {
    this.value = 'outerFunc value';
    console.log('outerFunc this.value: ' + this.value);
    console.log('obj.value: ' + obj.value);
}
// obj.act();

class CheckField {
    constructor() {
        this.message = ' 항목을 입력해주세요.';
    }
    setErrorMessage(field) {
        return `${field}${this.message}`;
    }
    setErrorMessages(...fields) {
        console.log(fields[0])
        return fields[0].map(this.setErrorMessage.bind(this));
    }
}

let fields = ['아이디', '패스워드', '이메일'];
let checkers = new CheckField();
// debugger;
let messages = checkers.setErrorMessages(fields);
console.log(messages);