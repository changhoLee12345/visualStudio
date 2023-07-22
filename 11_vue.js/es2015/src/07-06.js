function addContact({
    name,
    phone,
    email = "no email",
    age = 0
}) {
    console.log(name);
    console.log(phone);
    console.log(email);
    console.log(age);
}

addContact({
    name: 'Lee',
    phone: '010-1111'
})