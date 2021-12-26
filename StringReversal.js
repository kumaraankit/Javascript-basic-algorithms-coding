// function StringReverse(str)
// {
//     const arr=str.split("")
//     arr.reverse()
//     const str1=arr.join("")
//    // return str1
//     console.log(str1)
//console.log(str.split("").reverse().join(""))// Combining all lines of code into one single line of code in order to make it more readabl
//console.log(str.split("").reverse().join(""))

//-----------String Reversal without using inbuilt function----
// let res=""
// for(i=0;i<str.length;i++)
// {
//     const char=str[i]
//     res=char+res
// }
// console.log(res)
// debugger;
// console.log(str.split('').reduce((rev,char)=>char+rev,'')
// )}
// StringReverse("123")

function StringReverse(str){
    console.log(str.split("").reverse().join(""))
}
StringReverse("Ankit")
