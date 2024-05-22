//async and await combo is used to handle promises in a more elegant way

//before async await how promises were handled

//promise
/*const pr=new Promise((resolve)=>{
    setTimeout(()=>resolve("promise resolved"),1000);
});

 function getData(){
    pr.then(res=>console.log(res));
    console.log("hello");
   


 }


 getData();*/


 //how async function handles promises

 const pro=new Promise((resolve)=>{
    setTimeout(()=>resolve("promise resolved"),10000);
   });

  const pr=new Promise((resolve)=>{
    setTimeout(()=>resolve("promise resolved"),20000);
   });


   const prom=new Promise((resolve)=>{
    setTimeout(()=>resolve("promise resolved"),12000);
   });

    async function getDataAsync(){
        console.log("hello- world");

        const val4=await pro;
        console.log( val4);
       // console.log("hello"); 

        const val=await pr;
        console.log( val);
        //console.log("hello");

        //when 2 await lines are there then the second await line and first await line 
        //will simultaneously wait for only 10 seconds then all will be printed

      /*  const val2=await pr;
        console.log( val2);
        console.log("hello");*/

       /* const val3=await prom;
        console.log( val3);
        console.log("hello");*/

        
    }

    getDataAsync();
    

//difference between handling promises normally and using async await
//in async await js engine wait for the promise to be resolved before going to next line 
//which is not possible in case of normal way of handling promises

//in certain cases promises continue from the point/time it left in the previous exeution


//real world example
//fetching data from api

const GITHUB_API = "https://api.github.com/users/Ashveena";

async function fetchData(){
    const data=await fetch(GITHUB_API);

}

fetchData();





