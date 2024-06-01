class Person {
    #ssn;  // Private field

    constructor(name, age, ssn) {
        this.name = name;
        this.age = age;
        this.#ssn = ssn;
    }

    getSSN() {
        return `SSN: ${this.#ssn}`;
    }
}

const bob = new Person('Bob', 40, '123-45-6789');
console.log(bob.name);    // Output: Bob
console.log(bob.getSSN());  // Output: SSN: 123-45-6789
// console.log(bob.#ssn);   // Error: Private field '#ssn' must be declared in an enclosing class
