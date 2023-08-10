// The keys() method returns a new Array Iterator object that contains the keys for each element in the array.

const arr=[1,2,3,4,5,6,7,8,9];

let iterator=arr.keys();

for(let key of iterator){
    console.log(key);//0,1,2,3,4,5,6,7,8
    
}

const names=["hanzala","suhail","musaib","sakina"];

let store=names.keys();
console.log("keys of names are:");

for(let key of store){
    console.log(key);//0 1 2 3
}