// The flat() method creates a new array by flattening a nested array up to the specified depth.

/*
notes: The flat() method:

->does not change the original array.
->removes empty slots in arrays.
*/

let numbers = [1, 2, [3, 4, [5, 6, [7, 8,[34,45]]]]];

console.log(numbers.flat(3));//[ 1, 2, 3, 4, 5, 6, 7, 8, [ 34, 45 ] ]
console.log(numbers.flat(2));//[ 1, 2, 3, 4, 5, 6, [ 7, 8, [ 34, 45 ] ] ]
console.log(numbers.flat(1));//[ 1, 2, 3, 4, [ 5, 6, [ 7, 8, [Array] ] ] ]
console.log(numbers.flat(0));//[ 1, 2, [ 3, 4, [ 5, 6, [Array] ] ] ]


