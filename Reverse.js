function StringReverse(str)
{
    let res=""
    for(let i=0;i<str.length;i++)
    {
        const char=str[i]
        res=char+res
     }
    console.log(res)
}
StringReverse("Technoloy is changing everyday")
