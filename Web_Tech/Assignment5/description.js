document.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var productId = urlParams.get('id');
    if (productId) {
        fetch("https://fakestoreapi.com/products/".concat(productId))
            .then(function (res) { return res.json(); })
            .then(function (data) {
            displayProductDetails(data);
        })
            .catch(function (error) {
            console.error("Error fetching product:", error);
        });
    }
});
function displayProductDetails(product) {
    var productDetailContainer = document.getElementById('product-detail');
    productDetailContainer.innerHTML = "\n        <div class=\"col-md-6\">\n            <img src=\"".concat(product.image, "\" alt=\"").concat(product.title, "\" class=\"img-fluid\" width=300px height=300px>\n        </div>\n        <div class=\"col-md-  \">\n            <h2>").concat(product.title, "</h2>\n            <p>").concat(product.description, "</p>\n            <p><strong>Price: $").concat(product.price, "</strong></p>\n            <p><strong>Category: ").concat(product.category, "</strong></p>\n            <button class=\"btn btn-primary\" onclick=\"addToCart('").concat(product.title, "', ").concat(product.price, ", '").concat(product.image, "')\">Add to Cart</button>\n        </div>\n    ");
}
function addToCart(productName, productPrice, productImage) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var productIndex = cart.findIndex(function (item) { return item.name === productName; });
    if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
    }
    else {
        cart.push({ name: productName, price: productPrice, image: productImage, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("".concat(productName, " added to cart."));
}
