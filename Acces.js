
var promiseObject = new Promise((resolve, reject) => {
    //   reject({
    //     ok: false,
    //     error: "Something went Wrong",
    //   });
  
    reject([{ name: "yash" }, { name: "aish" }, { name: "ritvik" }]);
    resolve({ok:false});
  });
  
  Success Data
  
  promiseObject
    .then((successdata) => {
      console.log("Success Data");
      console.log(successdata);
    })
    .catch((errordata) => {
      console.log("Error Data");
      console.log(errordata);
    });
  
