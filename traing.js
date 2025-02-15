// // acessing the objects using async and await
// function forPromise()
// {
//   var promiseObject=  new Promise((resolve, reject) => {
//         resolve([{ name: "yash" }, { name: "aish" }, { name: "ritvik" }]);
//     });
//     return promiseObject;
// }
// async function myfun()
// {
//     let data =await forPromise();
//     console.log(data);
// }
// myfun();



//Acess the promise objects
var promiseObject = new Promise((resolve, reject) => {
    // resolve([{ name: "yash" }, { name: "aish" }, { name: "ritvik" }]);
    reject({ok:false});
});
promiseObject
    .then((successdata) => {
        console.log("Success Data");
        console.log(successdata);
    })
    .catch((errordata) => {
        console.log("Error Data");
        console.log(errordata);
    });