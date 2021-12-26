//Input---I love my country
//Output---country

let sentence="I love my country";
let arr=sentence.split(" ");
let longest="";
for(let word of arr){
    if(word.length>longest.length) longest=word;
}
console.log(longest);


//2nd solution
console.log(sentence.split(" ").sort((a,b)=> {return b.length-a.length})[0]);