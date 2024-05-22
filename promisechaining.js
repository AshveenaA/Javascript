const cart=["shoe","bag","watch"]
//callback hell

createOrder(cart,function(orderId){

    proceedtoPayment(orderId, function(PaymentInfo){
        showordersummary(PaymentInfo,function(){
            updatewalletBlance();     
        });
        
    });
});

//promise chaining to solve callback hell problem
createOrder(cart)
.then(function(orderId)
{
   return  proceedtoPayment(orderId);
})
.then(function(PaymentInfo)
{
    return showordersummary(PaymentInfo);
})
.then(function()
{
    return updatewalletBalance();
});


