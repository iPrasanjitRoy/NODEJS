/* array.fill(value, start, end) */
/* Value: The Value To Fill The Array With */
/* Start (Optional): The Index To Start Filling The Array. Defaults To 0. */
/* End (Optional): The Index To Stop Filling The Array (Not Inclusive). Defaults To Array.length */

let arr = new Array(5);
arr.fill(0); // Fills The Entire Array With 0 
console.log(arr); // [0, 0, 0, 0, 0] 

let iarr = [1, 2, 3, 4, 5];
arr.fill(0, 2); // Fills From Index 2 To The End With 0 
console.log(iarr); // [1, 2, 0, 0, 0]

let iiarr = [1, 2, 3, 4, 5];
arr.fill(0, 1, 4); // Fills From Index 1 To 4 (Not Inclusive) With 0 
console.log(iiarr); // [1, 0, 0, 0, 5]

let myarr = new Array(3);
arr.fill({}); // Fills The Array With Three Empty Objects 
console.log(myarr); // [{}, {}, {}] 

let resultArray = Array(Math.ceil(10 / 4)).fill(0);
console.log(resultArray); // Output: [0, 0, 0]
