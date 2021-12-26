function Palindrome(num)
{
    let reverse=0;
    while(num>0)
    {
        let digit=num%10;
        num=num/10;
        reverse=reverse*10+digit;
     }
    if(num===reverse)
    {
        console.log("number is palindrome")
    }
    else
    {
        console.log("number is not palindrome")
    }
}
Palindrome(121)

// REversing a String
// function Palindrome(str)
// {
//     str=str.toLowerCase()
//     const reverse=str.split("").reverse().join("")
//     if(str==reverse)
//     {
//         console.log("String is palindrome")
//     }
//     else
//     {
//         console.log("String is not palindrome")
//     }
// }
// Palindrome("MADA")

//Reversing a number
// function Palindrome(num)
// {
//     let reversed=num.toString().split("").reverse().join("")
//    reversed=parseInt(reversed)
//     console.log(reversed)
//     // if(num<0)
//     // return reverse*-1
//     if(num==reversed)
//     {
//         console.log("Number is Palindrome")
//     }
//     else
//     {
//         console.log("number is not palindrome")
//     }
// }

//-----------2nd way of dng Palindrome problem
// function Palindrome(str){
//     console.log(str.split('').every((char,i)=>char===str[str.length-i-1]))
// }
// Palindrome("MoM")