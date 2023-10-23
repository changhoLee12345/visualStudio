// what_closure.js

function outerFnc(name) {
    let saying = 'hello, ' + name;

    return function () {
        return saying;
    }
}

let c1 = outerFnc('hong');
console.log(c1());


var helper = [{
    menuid: 'menu1',
    txt: '홈'
}, {
    menuid: 'menu2',
    txt: '서비스'
}, {
    menuid: 'menu3',
    txt: '고객지원'
}];


document.addEventListener('DOMContentLoaded', function () {
    for (var i = 0; i < helper.length; i++) {
        let msg = helper[i];
        document.getElementById(msg.menuid).textContent = msg.txt;
        document.getElementById(msg.menuid).addEventListener('click', () => {
            tooltip(msg.txt)
        })
    }
})

function tooltip(msg) {
    console.log(msg);
}


const numbers = [1, 2, 3, 4, 5];

function init() {
    let sum = 0;

    return function (cnt) {
        return sum += cnt;
    }
}

let callInit = init();

let result = 0;
numbers.forEach(function (val, idx) {
    result = callInit(val);
})
console.log('result: ' + result);