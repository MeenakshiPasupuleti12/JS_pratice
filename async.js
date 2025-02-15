function createPromise() {
   
var promiseObject = new Promise((resolve, reject) => {
    //   reject({
    //     ok: false,
    //     error: "Something went Wrong",
    //   });
  
    resolve([{ name: "yash" }, { name: "aish" }, { name: "ritvik" }]);
    // resolve({ok:false});
  });
  return promiseObject;

}
async function  myfun()
{
    let data =await createPromise();
    console.log(data);
}
myfun();