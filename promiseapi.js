const p1= new Promise((resolve,reject)=>
    {
   resolve("success")
});



Promise.all([p1,p2,p3]);
 