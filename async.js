//returning a value like string or array
/*async function getData(){
    return "Namaste";
}
const data=getData();
console.log(data);//returns only a promise

//if you want the data back you can use the promisd.then function
data.then(res=>console.log(res));*/

//returning a promise
const p=new Promise((resolve,reject)=>{
    resolve("Promise reoslved")
});

async function getData(){
    return p;
}

const dataprom=getData();
console.log(dataprom);//returns only a promise

//if you want the data back you can use the promise.then function
dataprom.then(res=>console.log(res));
