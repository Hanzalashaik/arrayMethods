/*map method iterator every element of an array and give the result array,
 whatever we are giving the instruction here we are multiplying every element of an array with 4*/

const arr = [1, 2, 3, 4, 5, 6];

const result = arr.map((number) => {
  return number * 4;
});

console.log(result); //[ 4, 8, 12, 16, 20, 24 ]
