function MaxChar(str)
{
let charObject={};
let maxCount=0;
let maxChar=""
for(let i=0;i<str.length;i++)
{
const char=str[i]
charObject[char]=charObject[char]+1
if(charObject[char]>maxCount)
{
maxChar=char
maxCount=charObject[char]
}
}
console.log(maxChar)
}
MaxChar("ankitttttttttttttttttt")