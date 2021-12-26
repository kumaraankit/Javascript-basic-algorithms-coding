//Fibonnaci of nth number

const fibonnaci=(n)=>{
    if(n<=1)
    return n;
    else
    return fibonnaci(n-1) + fibonnaci(n-2);

}

console.log(fibonnaci(2));