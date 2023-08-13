const arr=["array","javaScript","python","c++"]
value=arr.values()
for( let val of value){
    console.log(val);
    
}

let arrayWithHole = ["A", "B", , "C"];

// returns 'undefined' as a value for empty slot
let iteratorObject = arrayWithHole.values();

// looping through iterator
for (let value of iteratorObject) {
  console.log(value);
}