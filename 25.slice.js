//Slice is used slice the array.

const numbers=[1,2,3,4,5,10];

console.log(numbers.slice(1,3));//[ 2, 3 ]

//to get last value
console.log(numbers.slice(-1));//[ 10 ]

//to get lst to values use -2
console.log(numbers.slice(-2));//[ 5, 10 ]

//to get all the values except last to 
console.log(numbers.slice(0,-2));//[ 1, 2, 3, 4 ]

