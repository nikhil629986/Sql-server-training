document.addEventListener("DOMContentLoaded", function () {
    var storedCategories = JSON.parse(localStorage.getItem('categories')) || [];
    displayCategories(storedCategories);
    fetch('https://fakestoreapi.com/products')
        .then(function (res) { return res.json(); })
        .then(function (data) {
        // Add code to create an array of categories
        var categories = Array.from(new Set(data.map(function (product) { return product.category; })));
        localStorage.setItem('categories', JSON.stringify(categories));
        localStorage.setItem('products', JSON.stringify(data));
    })
        .catch(function (error) {
        console.error("Error fetching products:", error);
    });
});
function displayCategories(categories) {
    var categoriesContainer = document.getElementById('categories');
    categories.forEach(function (category) {
        var categoryBtn = document.createElement('button');
        categoryBtn.className = 'btn btn-outline-primary m-2';
        categoryBtn.innerText = category;
        // Attach click event to filter products by category
        categoryBtn.onclick = function () {
            var storedProducts = JSON.parse(localStorage.getItem('products')) || [];
            filterProductsByCategory(category, storedProducts);
        };
        categoriesContainer.appendChild(categoryBtn);
    });
}
function filterProductsByCategory(category, products) {
    var filteredProducts = products.filter(function (product) { return product.category === category; });
    var productsContainer = document.getElementById('category-products');
    productsContainer.innerHTML = '';
    filteredProducts.forEach(function (product) {
        var productDiv = document.createElement('div');
        productDiv.className = 'prod';
        productDiv.innerHTML = "\n            <div class=\"card\">\n                <a href=\"description.html?id=".concat(product.id, "\">\n                    <img src=\"").concat(product.image, "\" alt=\"").concat(product.title, "\" class=\"card-img-top\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">").concat(product.title, "</h5>\n                        <p><strong>Category:</strong> ").concat(product.category, "</p>\n                        <p><strong>Price:</strong> \u20B9").concat(product.price, "</p>\n                        </a>\n                        <button class=\"btn-cart\" onclick=\"addToCart(").concat(product.id, ", '").concat(product.title, "', ").concat(product.price, ", '").concat(product.category, "', '").concat(product.description, "', '").concat(product.image, "')\">Add to Cart</button>\n                    </div>\n               \n            </div>\n        ");
        productsContainer.appendChild(productDiv);
    });
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
    alert(productName + ' has been added to your Cart!');
}
