class Person {
    constructor(name) {
        this.name = name;
    }

    describe() {
        console.log(`${this.name} is a person.`);
    }
}

class Student extends Person {
    describe() {
        console.log(`${this.name} is a student.`);
    }
}

class Teacher extends Person {
    describe() {
        console.log(`${this.name} is a teacher.`);
    }
}

const people = [
    new Person('John'),
    new Student('Alice'),
    new Teacher('Bob')
];

people.forEach(person => person.describe());
// Output:
// John is a person.
// Alice is a student.
// Bob is a teacher.
