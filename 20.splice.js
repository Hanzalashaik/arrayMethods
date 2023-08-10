//splice method is used to modify (insert,delete) the array from the middle.

//Example 1
const names=["hanzala","suhail","musaib","sakina"];

names.splice(1 ,      0,    "shaikh")//[ 'hanzala', 'shaikh', 'suhail', 'musaib', 'sakina' ]
//           s  d(how many)   insert
console.log(names);


//Example 2
const myArray=["item1","item2","item3"]
//delete
myArray.splice(1,1)
console.log(myArray);//[ 'item1', 'item3' ]

//insert
myArray.splice(2,0,"insertedItem")
console.log(myArray);//[ 'item1', 'item3', 'insertedItem' ]

//insert and delete

myArray.splice(1,1,"insertedItem1","insertedItem2");
console.log(myArray);//[ 'item1', 'insertedItem1', 'insertedItem2', 'insertedItem' ]







