//every method gives boolean values True/False

//every method will give True if the callback function gives True.

const numbers=[2,4,6,8];

const ans=numbers.every((number)=>{
    return number%2==0;
    
})

console.log(ans);

