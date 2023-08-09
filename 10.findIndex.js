const arr=[2,4,5,6,7,8]

const isOdd=function(number){
    return number%2!==0;
}
const ans =arr.findIndex(isOdd);
console.log(ans);

//Arrow function
// const ans=arr.findIndex((number)=>number%2!==0)
// console.log(ans);

