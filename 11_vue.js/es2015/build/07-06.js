'use strict';

function addContact(_ref) {
    var name = _ref.name,
        phone = _ref.phone,
        _ref$email = _ref.email,
        email = _ref$email === undefined ? "no email" : _ref$email,
        _ref$age = _ref.age,
        age = _ref$age === undefined ? 0 : _ref$age;

    console.log(name);
    console.log(phone);
    console.log(email);
    console.log(age);
}

addContact({
    name: 'Lee',
    phone: '010-1111'
});