import React, { useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
  rating: {
    rate: number;
  };
  price: number;
}

const fetchData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=18");
    const data: Product[] = await response.json();
    document.getElementById('searchInput').addEventListener('keyup', () => searchProducts(data));
    document.getElementById('sort-filter-select').addEventListener('change', () => handleSort(data));

    data.sort((a, b) => b.price - a.price);

    displayProducts(data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

const displayProducts = (products: Product[]) => {
  const productsContainer = document.getElementById("jewellery");
  productsContainer.innerHTML = "";
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "col-md-4 mb-4 prod-div ";

    productDiv.innerHTML = `
      <a href="description.html?id=${product.id}">
        <div class="card ml-5  card-sub ">
          <img src="${product.image}" alt="${product.title}" class="card-img-top text-center align-self-center" >
          <div class="card-body c-body  ">
            <h5 class="card-title">${product.title.slice(0, 20)}</h5>
            <p><strong>Category:</strong> ${product.category}</p>
            <p>Rating:❤${product.rating.rate}</p>
            <p><strong>Price:</strong> $${product.price}</p>
          </div>
        </div>
      </a>
      <div class="card-footer w-100 text-center">
        <button class="btn btn-primary" onclick="addToCart('${product.title}', ${product.price}, '${product.image}')">Add to Cart</button>
        <button class="btn" onclick="Wishlist('${product.title}', ${product.price}, '${product.image}',${product.id})">
          <i class="fa fa-heart" aria-hidden="true" style="color: red;"></i>
        </button>
      </div>
    `;
    productsContainer.appendChild(productDiv);
  });
}

const Wishlist = (productName: string, ProductPrice: number, ProductImage: string, ProdId: number) => {
  let wishlistcart: { name: string, image: string, price: number, id: number, quantity: number }[] = JSON.parse(localStorage.getItem('wishlistcart')) || [];
  let index = wishlistcart.findIndex(item => item.name === productName)
  if (index !== -1) {
    wishlistcart[index].quantity += 1
  } else {
    const tempObj = {
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

const addToCart = (productName: string, ProductPrice: number, ProductImage: string) => {
  let cart: { name: string, price: number, image: string, quantity: number }[] = JSON.parse(localStorage.getItem('cart')) || [];
  let index = cart.findIndex(item => item.name === productName)
  if (index !== -1) {
    cart[index].quantity += 1
  }
  else {
    cart.push({
      name: productName, price: ProductPrice, image: ProductImage, quantity: 1
    })
  }
  localStorage.setItem('cart', JSON.stringify(cart));

  alert(productName + ' has been added to your Cart!');
}

const handleSort = (data: Product[]) => {
  let parameter = (document.getElementById('sort-filter-select') as HTMLInputElement).value;
  if (parameter === "price-high") {
    data.sort((a, b) => b.price - a.price);
    console.log(parameter);
  }
  else if (parameter === "price-low") {
    data.sort((a, b) => a.price - b.price);
    console.log(parameter);
  }
  else if (parameter === "rating-high") {
    data.sort((a, b) => b.rating.rate - a.rating.rate);
    console.log(parameter);
  } else {
    data.sort((a, b) => a.rating.rate - b.rating.rate);
    console.log(parameter);
  }
  displayProducts(data);
}

const searchProducts = (products: Product[]) => {
  let parameter = (document.getElementById('searchInput') as HTMLInputElement).value.toLowerCase();
  const filter = products.filter(product => product.title.toLowerCase().includes(parameter))
  displayProducts(filter)
}

fetchData();