const myArray=["hanzala","shaik","ali"];

function isLength(string){
    return string.length==3;
}

const ans=myArray.find(isLength)
console.log(ans);

//Fat Arrow function

// const ans=myArray.find((string)=>string.length==3)
// console.log(ans);

