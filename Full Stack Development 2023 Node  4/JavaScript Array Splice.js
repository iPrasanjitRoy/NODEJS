// Define An Array 
let fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

// Using splice() To Remove Elements 
// Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
// In This Case, We'll Remove 2 Elements Starting From Index 1 
let removed = fruits.splice(1, 2);

console.log('Updated Array:', fruits);  // Output: ['Apple', 'Date']
console.log('Removed Elements:', removed);  // Output: ['Banana', 'Cherry']

// Using splice() To Insert Elements 
// Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
// Inserting 'Orange' and 'Grape' Starting From Index 2, Deleting 0 Elements 
fruits.splice(2, 0, 'Orange', 'Grape');

console.log('Updated Array:', fruits);  // Output: ['Apple', 'Date', 'Orange', 'Grape'] 

// Using splice() To Replace Elements 
// Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
// Replacing 1 Element At Index 2 With 'Peach'  
fruits.splice(2, 1, 'peach');

console.log('Updated Array:', fruits);  // Output: ['Apple', 'Date', 'Peach', 'Grape'] 
