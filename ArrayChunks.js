function chunk(arr,size){

    const chunked=[]
    let index=0
    while(index<arr.length){
        chunked.push(arr.slice(index,index+size))
        index+=size
    }
    console.log(chunked)
}
chunk([1,3,4,5],1)