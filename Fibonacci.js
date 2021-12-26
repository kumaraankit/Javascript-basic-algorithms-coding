//1st way of solving fibonacci series
// function fibonnaci(n){
// const result=[0,1]

// for(let i=2;i<=n;i++){
//     const a =result[i-1]
//     const b=result[i-2]
//     result.push(a+b)
// }
// console.log(result[n])

// }
// fibonnaci(1)

//----------2nd way of dng using recursion--------
function fibonacci(n){
    if(n<2){
        console.log(n)
    }else{
        console.log(fibonacci(n-1)+fibonacci(n-2))
    }
}
fibonacci(1)