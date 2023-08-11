//Reduce right starts from right

const numbers=[1,2,3,4,5,10]

const sum=numbers.reduceRight((accumulator,currentValue)=>{
    console.log(`accumulator ${accumulator} + currentvalue ${currentValue}`);
    
    return accumulator+currentValue;
})

console.log(sum);