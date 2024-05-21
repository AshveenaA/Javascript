const cart=["shoe","bag","watch"]

/*callback
createOrder(cart,function(orderId){

    proceedtoPayment(orderId)
});*/

//Promises
//no longer directly takes ppayment function directly but return a promise like {data:undefinesd}after 5 sec {data:orderdeatikls}
const Promise =createOrder(cart)

Promise.then(function(orderId)
{
    proceedtoPayment(orderId);
});