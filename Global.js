var city ="hyd";


function fn()
{
  console.log(city);
  console.log("fn is called");
}
function f1()
{
  console.log("this is f1 and  iam calling fn as a guest");
  fn();
}
fn();
f1();