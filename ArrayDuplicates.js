//Remove array duplicates

let arr=[1,4,5,2,1,4]

//1. using set
let newArray=[... new Set(arr)];
console.log(newArray);


//Using filter method
let newValues=arr.filter((item,index)=>{
    return arr.indexOf(item)==index;
})

console.log(newValues);

