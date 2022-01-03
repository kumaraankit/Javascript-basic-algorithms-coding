// Given an array of integers, find the one that appears an odd number of times.
// There will be always one integer

function findOdd(A) {
    let count=0;
    let newArray=A.sort()
    for(let i=0;i<newArray.length;i++){
      for(let j=0;j<newArray.length;j++){
        if(newArray[i]===newArray[j]){
          count++;
        }
    }
      if(count%2!==0){
        return newArray[i]
      }
      }
  }

  console.log(findOdd([1,3,4,1,1,4,3])) // OP-1 

  // Alternative solution to do the same problem

  function findOdd(A) {
    return A.reduce((l, r) => l ^ r);
  }

  console.log(findOdd([1,3,1,1,1,1,3]))