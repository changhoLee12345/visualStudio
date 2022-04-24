// string_tagged_template.js

let str1 = 'This\
 is\
 the\
 only\
 story.';
console.log(str1);

str1 = `This
is
the
only
story`;
console.log(str1);

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

let template = `<ul>
<li>이름: ${friends[0].name}, 나이: ${friends[0].age} </li>
<li>이름: ${friends[1].name}, 나이: ${friends[1].age} </li>
<li>이름: ${friends[2].name}, 나이: ${friends[2].age} </li>
<li>이름: ${friends[3].name}, 나이: ${friends[3].age} </li>
</ul>
`;

template = `<ul>
${friends.map(function(friend) {
    return `<li>이름: ${friend.name}, 나이: ${friend.age} </li>`
}).join('\n')}
</ul>`
console.log(template);