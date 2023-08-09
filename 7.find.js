const myArray=["hanzala","shaik","ali"];

function isLength(string){
    return string.length==3;
}

const ans=myArray.find(isLength)
console.log(ans);

//Fat Arrow function

// const ans=myArray.find((string)=>string.length==3)
// console.log(ans);

//Real world Example

const users=[
    {
        userId:1,item:"tv",price:1200
    },
    {
        userId:2,item:"phone",price:8000
    },
    {
        userId:3,item:"laptop",price:56000
    }
]

const searching=users.find((user)=>{
    return user.userId==2
})

console.log(searching);
