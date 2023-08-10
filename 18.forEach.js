/*
The forEach() method calls a function for each element in an array.
The forEach() method is not executed for empty elements.

Always remember that it doesn’t return anything 
and if you try to get the value it will be undefined.
*/

const arr=[2,3,4,52,1,8]

//displaying index and its values
arr.forEach((number,index)=>{
    console.log(`${index} value is ${number}`);
    
})

//multiplying each number with 3
arr.forEach((number)=>{
    console.log(number*3);
    
    
})

const names=["hanzaka","hanzala","hahajjjd","hanzala"]
names.forEach((Name ,index)=>{
    if(Name==="hanzala"){
        console.log("index are",index ,Name);
        
    }
})


