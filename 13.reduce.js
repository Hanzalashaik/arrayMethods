const numbers=[1,2,3,4,5,10]

const sum=numbers.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
})

console.log(sum);

//Tracking

// accumulator     currentValue    return
//     1                2            3
//     3                3            6
//     6                4            10
//     10               5            15
//     15               10           25

//Real World Example

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

const totalPrice=users.reduce((productPrice,nextProduct)=>{
    return productPrice+nextProduct.price;
},0)

console.log(totalPrice);


