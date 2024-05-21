const cart=["shoe","bag","watch"]
//just promise
const promise=createOrder(cart);

//if promise is resolved
promise
.then(function(orderId)
{
    //proceedtoPayment(orderId)
    console.log(orderId);
})

//if promise gets rejected
.catch(function(err){
    console.log(err.message);
});

//creating our own promises

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        //createOrder
        //validateCart
        //orderId
        if(!validateCart(cart)){
            const err=new Error("Cart not validated");
            reject(err);
        }
        const orderId="12345";
        if(orderId){
            setTimeout(function(){
                resolve(orderId)}
        ,10000);
            }
            

        
    });
    return pr;
}


function validateCart(cart)
{
    return true;

}