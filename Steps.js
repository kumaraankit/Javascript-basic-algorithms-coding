function steps(n){
    let stair=''
    for(let row=0;row<n;row++){
        for(let column=0;column<n;column++){
            if(column<=row){
                stair+='#'
            }else{
                stair+=' '
            }
        }
    }
    console.log(stair)
    console.log('%cHello Ankit','color:green; background:yellow; font-size:30px')
}
steps(4)