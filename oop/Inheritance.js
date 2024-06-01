class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);  // Call the parent class constructor
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying in grade ${this.grade}.`);
    }
}

const alice = new Student('Alice', 20, 'Sophomore');
alice.greet();  // Output: Hello, my name is Alice and I am 20 years old.
alice.study();  // Output: Alice is studying in grade Sophomore.
