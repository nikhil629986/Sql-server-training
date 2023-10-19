fetch("https://fakestoreapi.com/products?limit=18")
    .then(function (res) { return res.json(); })
    .then(function (data) {
    document.getElementById('searchInput').addEventListener('keyup', function () { return searchProducts(data); });
    document.getElementById('sort-filter-select').addEventListener('change', function () { return handleSort(data); });
    data.sort(function (a, b) { return b.price - a.price; });
    displayProducts(data);
})
    .catch(function (error) {
    console.error("Error fetching products:", error);
});
function displayProducts(products) {
    var productsContainer = document.getElementById("jewellery");
    productsContainer.innerHTML = "";
    products.forEach(function (product) {
        var productDiv = document.createElement("div");
        productDiv.className = "col-md-4 mb-4 prod-div ";
        productDiv.innerHTML = "\n\n    <a href=\"description.html?id=".concat(product.id, "\">\n    <div class=\"card ml-5  card-sub \">\n            \n          \n            <img src=\"").concat(product.image, "\" alt=\"").concat(product.title, "\" class=\"card-img-top text-center align-self-center\" >\n            <div class=\"card-body c-body  \">\n                <h5 class=\"card-title\">").concat(product.title.slice(0, 20), "</h5>\n                <p><strong>Category:</strong> ").concat(product.category, "</p>\n                <p>Rating:\u2764").concat(product.rating.rate, "</p>\n                <p><strong>Price:</strong> $").concat(product.price, "</p>\n            </div></a>\n        \n        \n       \n    </div>\n    <div class=\"card-footer w-100 text-center\">\n    <button class=\"btn btn-primary p-2 mt-3 w-100 \" onclick=\"addToCart('").concat(product.title, "', ").concat(product.price, ", '").concat(product.image, "')\">Add to Cart</button>\n    <button class=\"btn\" onclick=\"Wishlist('").concat(product.title, "', ").concat(product.price, ", '").concat(product.image, "',").concat(product.id, ")\">\n       <i class=\"fa fa-heart\" aria-hidden=\"true\" style=\"color: red;\"></i>\n    </button>\n</div>\n        ");
        productsContainer.appendChild(productDiv);
    });
}
function Wishlist(productName, ProductPrice, ProductImage, ProdId) {
    var wishlistcart = JSON.parse(localStorage.getItem('wishlistcart')) || [];
    var index = wishlistcart.findIndex(function (item) { return item.name === productName; });
    if (index != -1) {
        wishlistcart[index].quantity += 1;
    }
    else {
        var tempObj = {
            name: productName,
            image: ProductImage,
            price: ProductPrice,
            id: ProdId,
            quantity: 1
        };
        wishlistcart.push(tempObj);
    }
    localStorage.setItem('wishlistcart', JSON.stringify(wishlistcart));
    // Display alert when item is added to wishlist
    alert(productName + ' has been added to your wishlist!');
}
'';
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
    alert(productName + ' has been added to your Cart!');
}
function handleSort(data) {
    var parameter = document.getElementById('sort-filter-select').value;
    if (parameter === "price-high") {
        data.sort(function (a, b) { return b.price - a.price; });
        console.log(parameter);
    }
    else if (parameter === "price-low") {
        data.sort(function (a, b) { return a.price - b.price; });
        console.log(parameter);
    }
    else if (parameter === "rating-high") {
        data.sort(function (a, b) { return b.rating.rate - a.rating.rate; });
        console.log(parameter);
    }
    else {
        data.sort(function (a, b) { return a.rating.rate - b.rating.rate; });
        console.log(parameter);
    }
    displayProducts(data);
}
function searchProducts(products) {
    var parameter = document.getElementById('searchInput').value.toLowerCase();
    this.filter = products.filter(function (product) { return product.title.toLowerCase().includes(parameter); });
    displayProducts(this.filter);
}
