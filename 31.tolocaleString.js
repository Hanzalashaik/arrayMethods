
let array1=[1,"javascript",new Date()];

console.log(array1.toLocaleString());//1,javascript,8/17/2023, 4:18:54 PM
//In the above example, we have used the toLocaleString() method to convert array1 to a string representing its elements.

let price=[234,435,230,500,569.590];

let result=price.toLocaleString("en-US",{
    style:"currency",
    currency:"EUR"
})
console.log(result);//€234.00,€435.00,€230.00,€500.00,€569.59
