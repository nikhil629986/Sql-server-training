// const  GithubApi="https://api.github.com/users/akshaymarch7"
// const user=fetch( GithubApi)
// console.log(user)

// user.then(function(data)
// {
//   console.log(data)
// });


// createorder(cart)
// .then(function(orderId)
// {
// return proceedToPayment(orderId);
// })
// .then(function(paymentinfo)
// {
// return showOrderSummary(paymentInfo);
// })

//writing own promises 
const cart =["shoes","pants","kurta"]
const promise=createOrder(cart);
promise.then(function(orderId){
 console.log(orderId)
})
//producers
function createOrder(cart){
    const pr=new Promise( function(resolve, reject)
    {
      //createOrder
      //validate Cart
      //order Id

      if(!validateCart(cart))
      {
        const err=new Error("CANNOT_CREATE_ORDER")
        reject()
      }

      //LOGIC TO CREATE ORDER
      const orderId="12345"
      if(orderId)
      {
        resolve(orderId)
      }
    });
    return pr;
}
function validateCart(cart){
    return true;
}