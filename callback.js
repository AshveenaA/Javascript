//Promises
const cart=["shoe","bag","watch"]

createOrder(cart,function(orderId){

    proceedtoPayment(orderId)
});

const Promise =createOrder(orderId)

Promise.the(function(orderId)
{
    proceedtoPayment(orderId);
});