document.addEventListener("DOMContentLoaded", function () {
    displayWishlist();
});
function displayWishlist() {
    var wishlistContainer = document.getElementById('Wishlist');
    var wishlistcart = JSON.parse(localStorage.getItem('wishlistcart')) || [];
    console.log(wishlistcart);
    if (wishlistcart.length !== 0) {
        wishlistcart.forEach(function (product) {
            var productDiv = document.createElement("div");
            productDiv.className = "col-md-4 mb-4";
            productDiv.innerHTML = "\n            \n            \n            <div class=\"card h-100 ml-10 mt-5\">\n            <a href=\"description.html?id=".concat(product.id, "\"><img src=\"").concat(product.image, "\" alt=\"").concat(product.title, "\" class=\"card-img-top text-center\" style=\"display: block; margin: 0 auto;\">\n              <!-- Add CSS style to center the image -->\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">").concat(product.name, "</h5>\n               \n                <p><strong>Price:</strong> $").concat(product.price, "</p>\n              </div>\n           \n          </a>\n          <div class=\"card-footer\">\n            <button class=\"btn btn-primary text-center \" onclick=\"addToCart('").concat(product.title, "', ").concat(product.price, ", '").concat(product.image, "')\">Add to Cart</button>\n            <i class=\"fas fa-times-circle ml-2 text-danger\" onclick=\"removeFromWishlist('").concat(product.id, "')\"></i>\n          </div>\n          </div>\n          <br>\n          <br>\n            ");
            wishlistContainer.appendChild(productDiv);
        });
    }
    else {
        wishlistContainer.innerHTML = "<p>Your wishlist is currently empty.</p>";
    }
}
function clearWishlist() {
    localStorage.clear();
    location.reload();
}
function addToCart(productName, ProductPrice, ProductImage) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var index = cart.findIndex(function (item) { return item.name === productName; });
    if (index != -1) {
        cart[index].quantity += 1;
    }
    else {
        cart.push({
            name: productName, price: ProductPrice, image: ProductImage, quantity: 1
        });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
}
