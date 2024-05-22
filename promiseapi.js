//lingos famous in promise world
//resolve reject success failure fulfilled  rejected
//settled-got the result


//promiseall
/*const p1= new Promise((resolve,reject)=>
{
    setTimeout(()=>resolve("Async operation 1"),3000);
})

const p2= new Promise((resolve,reject)=>
    {
        //setTimeout(()=>resolve("Async operation 2"),1000);
        setTimeout(()=>reject("Async operation 2"),1000);
    })

    const p3= new Promise((resolve,reject)=>
        {
            setTimeout(()=>resolve("Async operation 3"),2000);
        });


Promise.all([p1,p2,p3])
.then(res=>
    {console.log(res)})
.catch(err=>{console.error(err)}
);*/
 
//promiseallsettled
/*const p1= new Promise((resolve,reject)=>
    {
        setTimeout(()=>resolve("Async operation 1"),3000);
    })
    
    const p2= new Promise((resolve,reject)=>
        {
            setTimeout(()=>resolve("Async operation 2"),1000);
            //setTimeout(()=>reject("Async operation 2"),1000);
        })
    
        const p3= new Promise((resolve,reject)=>
            {
                setTimeout(()=>resolve("Async operation 3"),2000);
            });
    
    
    Promise.allSettled([p1,p2,p3])
    .then(res=>
        {console.log(res)})
    .catch(err=>{console.error(err)}
    );*/

    //promiserace
//promiseallsettled
/*const p1= new Promise((resolve,reject)=>
    {
        setTimeout(()=>resolve("Async operation 1"),3000);
    })
    
    const p2= new Promise((resolve,reject)=>
        {
           setTimeout(()=>resolve("Async operation 2"),1000);
           // setTimeout(()=>reject("Async operation 2"),1000);
        })
    
        const p3= new Promise((resolve,reject)=>
            {
                setTimeout(()=>reject("Async operation 3"),2000);
            });
    
    
    Promise.race([p1,p2,p3])
    .then(res=>
        {console.log(res)})
    .catch(err=>{console.error(err)}
    );*/

    //promiseany
    //promiseallsettled
const p1= new Promise((resolve,reject)=>
    {
        setTimeout(()=>reject("Async operation 1"),3000);
    })
    
    const p2= new Promise((resolve,reject)=>
        {
           //setTimeout(()=>resolve("Async operation 2"),1000);
            setTimeout(()=>reject("Async operation 2"),1000);
        })
    
        const p3= new Promise((resolve,reject)=>
            {
                setTimeout(()=>reject("Async operation 3"),2000);
            });
    
    
    Promise.any([p1,p2,p3])
    .then(res=>
        {console.log(res)})
    .catch(err=>{console.error(err);
        console.log(err.errors);
    }
    )
    ;




