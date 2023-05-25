class Person {
    constructor(firstName, lastName, age, gender) {
        this.name = {
            first: firstName,
            last: lastName
        }
        this.age = age;
        this.gender = gender;
    }
    getAge(firstName, lastName) {
        return this.age;
    }
    getGender(firstName, lastName) {
        return this.gender;
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, age, gender, subject) {
        super(firstName, lastName, age, gender);
        this.subject = subject;
    }
    getSubject() {
        return this.subject;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, gender, grade) {
        super(firstName, lastName, age, gender);
        this.grade = grade;
    }
    getGrade() {
        return this.grade;
    }
}