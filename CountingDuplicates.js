function duplicateCount(text){
    //...
    let count=0,element=""
    let newString=text.toLowerCase().split("").sort().join('')
    console.log(newString)
    for(let i=0;i<newString.length;i++){
      if(newString[i]===newString[i+1] && newString[i]!==element){
          element=newString[i];
           count++;
           i++;
      }
    }
    return count;
  }

  let result=duplicateCount("Ankaitaiiiiiinnnnn")
  console.log(result)