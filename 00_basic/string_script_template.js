// string_script_template.js

let friends = [{
    name: '라이언',
    age: 5
}, {
    name: '어피치',
    age: 3
}, {
    name: '콘',
    age: 4
}, {
    name: '프로도',
    age: 2
}];

document.addEventListener('DOMContentLoaded', function () {
    let template = eval(document.getElementById('tableliteral').innerHTML);
    console.log(template);
    document.getElementById('show').innerHTML = template;
})