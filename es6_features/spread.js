const person = { name: 'Jane', age: 30 };
const { name, age } = person;
console.log(name); 
console.log(age);

const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log(first);
console.log(second); 

const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr);

function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4));

function greet(name = 'Guest') { //default parameter
    console.log(`Hello, ${name}!`);
}
greet(); 
greet('Alice'); 

//*************************

// let a = 10;
// if (true) {
//     let a = 20; 
//     console.log(a); 
// }
// console.log(a); 


// const b = 30;
// b = 40; 