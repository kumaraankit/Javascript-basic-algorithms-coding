let x1=[1,2,3,4,1,2,4]
console.log(x1.filter((dup,num)=>x1.indexOf(dup)==num))

//Joining two arrays
let y1=[1,2,3,4]
let y2=[5,6,7,8]
console.log([...y1,...y2])