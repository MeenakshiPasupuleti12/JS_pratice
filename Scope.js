function f1()
 {
//     ------
//     -------
//     ----------
}

if(true)
{
    console.log("i am if block");
}
function fnOuter()
{
    function f1()
    {
        console.log("i am f1");
    }
}
fnOuter();