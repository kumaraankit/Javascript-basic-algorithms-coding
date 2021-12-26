//-----------1st way od dng
// function vowel(str){
//     let count=0
//     let checker=['a','e','i','o','u']
//     for(let char of str.toLowerCase()){
//         if(checker.includes(char)){
//             count++
//         }
//     }
//     console.log(count)
// }
// vowel("Ankit kumar")

//---------2nd way of dng
function vowels(str){
    const matches=str.match(/[aeiou]/gi)
    console.log(matches?matches.length:o)
}
vowels("Ankit")