// object data type
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(person);
console.log(person.name); // John
console.log(person.age);  // 30
console.log(person.city); // New York

console.log(typeof(person));

// array data type
let numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[4]);

console.log(typeof(numbers));

// mixed array
let mixedArray = [1, "Hello", true];
{ name: "Alice" },
    [1, 2, 3]
];

console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);
console.log(mixedArray[4]);

// to find the length of the array
console.log(mixedArray.length);

// function
function greet() {
    console.log("Hello, World!");
}

greet(); // Hello, World!

// normal function
function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3));

// function expression
let divide = function(a, b) {
    return a / b;
};

console.log(divide(10, 2));
let sayHi();
let square =