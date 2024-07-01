const numbers = [1, 2, 3, 4, 5];

// Filtering Even Numbers Using An Arrow Function 
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);

// Example 2: Mapping An Array 

const names = ['Alice', 'Bob', 'Charlie'];

//   Mapping Names To Uppercase Using An Arrow Function 
const uppercasedNames = names.map((name) => name.toUpperCase());

console.log(uppercasedNames);

// Arrow Function Used in setTimeout
setTimeout(() => {
    console.log('Hello After 1 Second!');
}, 1000); 