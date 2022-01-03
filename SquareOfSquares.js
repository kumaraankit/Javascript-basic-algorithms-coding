var isSquare = function(n){
    if(n<0){
      return false;
    }
      for(let i=0;i<=n;i++){
      if(i*i===n){
        return true;
      }
    }
    return false
  }

  console.log(`checking if a number is a sqaure------- ${isSquare(4)}`)

  // Alternative solution by using Math.sqrt
//   var isSquare = function(n){
//     return n < 0 ? false : Math.sqrt(n) % 1 === 0
//   }

