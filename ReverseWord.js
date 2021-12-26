//Reverse the word but keep the sentence

let str="India is the country of love";
 let reversedWord=str.split(" ").reverse().join(' ').split('').reverse().join('');
 console.log(reversedWord);