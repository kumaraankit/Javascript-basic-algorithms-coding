function anagrams(StringA,StringB){
    if(cleanString(StringA)===cleanString(StringB)){
        console.log("Strings are anagrams")
    }
    else{
        console.log("Strings are not anagrams")
    }
}
function cleanString(str){
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join()
}
anagrams("Ankit","tiknA")