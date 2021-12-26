//--------1st way of dng ---------------
// function capital(str){

//     const words=[]
//     for(let word of str.split(' ')){
//     words.push(str[0].toUpperCase() + str.slice(1))
//     }
//     console.log(words.join(''))
// }
// capital('ankit')

//-------2nd way of dng problem---------

function capital(str){
    let result=str[0].toUpperCase()
    for(let i=1;i<str.length;i++){
        if(str[i]===''){
            result+=str[i].toUpperCase()
        }
        result+=str[i]
    }
    console.log(result)
}
capital('ankit')