//Its is used to sort the array in acending order but it is an unordered sort
const arr=[4,7,6,2,3,8,9]

console.log(arr.sort());//[2,3,4,,6,7,8,9]

//unordered sort
const arr2=[4,7,6,2,3,8,9,100]
   console.log(arr2.sort());
   
   //in ordered
const sort=arr2.sort((a,b)=>{
    return a-b;
});
console.log(sort);//[2,3,4,6,7,8,9,100]
