const name=['Ankit']

function findNameArray(array){
    let t0=performance.now();
    for(let i=0;i<array.length;i++){
        if(array[i]==='Ankit'){
            console.log("Array found")
        }
    }
    let t1=performance.now()
    console.log("time taken to execute it " + (t1-t0)+"milliseconds");
}
findNameArray(name)


//Big O--- It defines as how long an alogorithm takes to run it with more and more input.
//It also define as how much the algorithm takes time to complete the execution