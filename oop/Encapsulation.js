function createPerson(name, age) {
    // Private variables
    let _name = name;
    let _age = age;

    return {
        // Public method to get the name
        getName: function() {
            return _name;
        },
        // Public method to set the name
        setName: function(newName) {
            _name = newName;
        },
        // Public method to get the age
        getAge: function() {
            return _age;
        },
        // Public method to set the age
        setAge: function(newAge) {
            if (newAge > 0) {
                _age = newAge;
            } else {
                console.log('Please enter a valid age.');
            }
        }
    };
}

const person = createPerson('John', 30);

console.log(person.getName());  // Output: John
person.setName('Alice');
console.log(person.getName());  // Output: Alice

console.log(person.getAge());  // Output: 30
person.setAge(25);
console.log(person.getAge());  // Output: 25
