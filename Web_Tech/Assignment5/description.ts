

document.addEventListener("DOMContentLoaded", function() {
    const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    const productId: string | null = urlParams.get('id');
  
    if (productId) {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then((data: any) => {
                displayProductDetails(data);
            })
            .catch((error: any) => {
                console.error("Error fetching product:", error);
            });
    } 
});

function displayProductDetails(product: any): void {
    const productDetailContainer: HTMLElement | null = document.getElementById('product-detail');
   
    if (productDetailContainer) {
        productDetailContainer.innerHTML = `
            <div class="col-md-6">
                <img src="${product.image}" alt="${product.title}" class="img-fluid" width=300px height=300px>
            </div>
            <div class="col-md-  ">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <p><strong>Price: $${product.price}</strong></p>
                <p><strong>Category: ${product.category}</strong></p>
                <button class="btn btn-primary" onclick="addToCart('${product.title}', ${product.price}, '${product.image}')">Add to Cart</button>
            </div>
        `;
    }
}

function addToCart(productName: string, productPrice: number, productImage: string): void {
    let cart: any[] = JSON.parse(localStorage.getItem('cart')) || [];
    let productIndex: number = cart.findIndex((item: any) => item.name === productName);
  
    if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, image: productImage, quantity: 1 });
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} added to cart.`);
}