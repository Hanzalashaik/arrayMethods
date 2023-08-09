const numbers=[1,2,3,4,5,6,7,8,9,10]

const sum=numbers.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
})

console.log(sum);

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
