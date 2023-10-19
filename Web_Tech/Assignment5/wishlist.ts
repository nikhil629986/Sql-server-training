document.addEventListener("DOMContentLoaded", function() {
    displayWishlist();
});
function displayWishlist() {
    const wishlistContainer=document.getElementById('Wishlist');
    let wishlistcart = JSON.parse(localStorage.getItem('wishlistcart')) || [];
    console.log(wishlistcart);
    if(wishlistcart.length !== 0){
        wishlistcart.forEach((product)=>{
            const productDiv = document.createElement("div");
            productDiv.className = "col-md-4 mb-4";
        
            productDiv.innerHTML = `
            
            
            <div class="card h-100 ml-10 mt-5">
            <a href="description.html?id=${product.id}"><img src="${product.image}" alt="${product.title}" class="card-img-top text-center" style="display: block; margin: 0 auto;">
              <!-- Add CSS style to center the image -->
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
               
                <p><strong>Price:</strong> $${product.price}</p>
              </div>
           
          </a>
          <div class="card-footer">
            <button class="btn btn-primary text-center " onclick="addToCart('${product.title}', ${product.price}, '${product.image}')">Add to Cart</button>
            <i class="fas fa-times-circle ml-2 text-danger" onclick="removeFromWishlist('${product.id}')"></i>
          </div>
          </div>
          <br>
          <br>
            `;
            wishlistContainer.appendChild(productDiv);
        });
    }else{
        wishlistContainer.innerHTML = "<p>Your wishlist is currently empty.</p>";
    }
   
}
function clearWishlist() {
    localStorage.clear();
    location.reload();
}

function addToCart(productName,ProductPrice,ProductImage)
{
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let index=cart.findIndex(item=> item.name===productName)
  if(index!=-1)
  {
    cart[index].quantity+=1
  }
  else{
    cart.push({
      name: productName, price: ProductPrice, image: ProductImage, quantity: 1 
    })
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  
  console.log(cart)
}
