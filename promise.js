var promiseObject=new Promise((resolve,reject)=>{
// resolve("meena");
// resolve(89);
// resolve({name:"meena",age:24,gender:"male"});
resolve([{name:"nikki"},{age:78},{gender:"male"},{ph:5635473647}]);
// reject(73842);
})
console.log(promiseObject) // Promise { <pending> }