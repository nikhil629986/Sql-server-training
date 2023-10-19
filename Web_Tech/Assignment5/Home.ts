fetch("https://fakestoreapi.com/products?limit=18")
  .then((res) => res.json())
  .then((data) => {
   document.getElementById('searchInput').addEventListener('keyup',()=>searchProducts(data))
    document.getElementById('sort-filter-select').addEventListener('change',()=>handleSort(data));
   
    data.sort((a,b)=>b.price-a.price);
   
    displayProducts(data);
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  })
function displayProducts(products) {
  const productsContainer = document.getElementById("jewellery");
  productsContainer.innerHTML="";
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "col-md-4 mb-4 prod-div ";

    productDiv.innerHTML = `

   
    <div class="card ml-5  h-100 card-sub ">
            
          
    <a href="description.html?id=${product.id}"><img src="${product.image}" alt="${product.title}" class="card-img-top text-center align-self-center" >
            <div class="card-body c-body  ">
                <h5 class="card-title">${product.title.slice(0, 20)}</h5>
                <p><strong>Category:</strong> ${product.category}</p>
                <p>Rating:❤${product.rating.rate}</p>
                <p><strong>Price:</strong> $${product.price}</p>
            </div></a>
        
        
       
    
    <div class="card-footer w-100 text-center">
    <button class="btn btn-primary w-100" onclick="addToCart('${product.title}', ${product.price}, '${product.image}')">Add to Cart</button>
    <button class="btn" onclick="Wishlist('${product.title}', ${product.price}, '${product.image}',${product.id})">
       <i class="fa fa-heart" aria-hidden="true" style="color: red;"></i>
    </button>
</div>
</div>
        `;
    productsContainer.appendChild(productDiv);
  });
}
function Wishlist(productName, ProductPrice, ProductImage,ProdId) {
  let wishlistcart = JSON.parse(localStorage.getItem('wishlistcart')) || [];
  let index = wishlistcart.findIndex(item => item.name === productName)
  if (index != -1) {
    wishlistcart[index].quantity += 1
  } else {
    const tempObj={
      name:productName,
      image:ProductImage,
      price:ProductPrice,
      id:ProdId,
      quantity:1
    };
    wishlistcart.push(tempObj);
  }
  localStorage.setItem('wishlistcart', JSON.stringify(wishlistcart));
  
  // Display alert when item is added to wishlist
  alert(productName + ' has been added to your wishlist!');
}
''

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

function handleSort(data){
  let parameter=document.getElementById('sort-filter-select').value;
  if(parameter==="price-high"){
     data.sort((a,b)=>b.price-a.price);
     console.log(parameter);
  }
  else if(parameter==="price-low"){
    data.sort((a,b)=>a.price-b.price);
    console.log(parameter);
  }
  else if(parameter==="rating-high"){
    data.sort((a,b)=>b.rating.rate-a.rating.rate);
    console.log(parameter);
  }else{
    data.sort((a,b)=>a.rating.rate-b.rating.rate);
    console.log(parameter);
  }
  displayProducts(data);
}


function searchProducts(products)

{    let parameter=document.getElementById('searchInput').value.toLowerCase();
      this.filter=products.filter(product => product.title.toLowerCase().includes(parameter))
displayProducts(this.filter)

}
