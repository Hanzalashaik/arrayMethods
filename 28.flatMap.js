//it flat the array as well as map the array

const arr =[1,2,[3,4,[3,6]] ,[4,3]]

// const store=arr.flat(2)
// console.log(store);

const ans = store.flatMap((x)=>{return x})
console.log(ans);
