
const cart=["shoe","bag","watch"]

api.createOrder(cart,function(){

    api.proceedtoPayment(function(orderId){

        api.orderSummary(orderId)
    });
    
});

//callback hell
//inversion of control
