function fn()
{
   var data=[
    "hello dude",
    ()=>
    {
        console.log("i am lagginngg the java script");
    },
    ];
    return data;
}

// var mydata =fn();
// var [x, y] = fn();
// // var x=fn();
// y();
// console.log(x[1]());
// x[1]();


var [x,y] =fn();
y();
console.log(x);