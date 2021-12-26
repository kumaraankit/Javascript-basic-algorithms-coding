//Input=Ankit
//Output=tikna

//Using built-in methods
let str="Ankit";
console.log(str.split("").reverse().join(""));

//without using built-in methods
let reverseString="";
for(let i=str.length-1;i>=0;i--){
    reverseString+=str[i];
}
console.log(reverseString);