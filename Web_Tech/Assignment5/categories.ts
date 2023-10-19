document.addEventListener("DOMContentLoaded", function() {
    const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];
    displayCategories(storedCategories);
  
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {

        
        // Add code to create an array of categories
        const categories = Array.from(new Set(data.map(product => product.category)));
        localStorage.setItem('categories', JSON.stringify(categories));
        localStorage.setItem('products', JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  });
function displayCategories(categories) {
    const categoriesContainer = document.getElementById('categories');

    categories.forEach(category => {
        const categoryBtn = document.createElement('button');
        categoryBtn.className = 'btn btn-outline-primary m-2';
        categoryBtn.innerText = category;

        // Attach click event to filter products by category
        categoryBtn.onclick = () => {
            const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
            filterProductsByCategory(category, storedProducts);
        };

        categoriesContainer.appendChild(categoryBtn);
    });
}

function filterProductsByCategory(category, products) {
    const filteredProducts = products.filter(product => product.category === category);
    const productsContainer = document.getElementById('category-products');
    productsContainer.innerHTML = '';

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'prod';

        productDiv.innerHTML = `
            <div class="card">
                <a href="description.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.title}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p><strong>Category:</strong> ${product.category}</p>
                        <p><strong>Price:</strong> ₹${product.price}</p>
                        <button class="btn-cart" onclick="addToCart(${product.id}, '${product.title}', ${product.price}, '${product.category}', '${product.description}', '${product.image}')">Add to Cart</button>
                    </div>
                </a>
            </div>
        `;

        productsContainer.appendChild(productDiv);
    });
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
  
  alert(productName + ' has been added to your Cart!');
}
