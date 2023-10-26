
interface CartItem {
  image: string;
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  quantity: number;
}

document.addEventListener("DOMContentLoaded", function() {
    displayCartItems();
});
function displayCartItems(): void {
    const cartContainer: HTMLElement | null = document.getElementById('cart-items');
    let cart: CartItem[] = JSON.parse(localStorage.getItem('cart')) || [];

    if (cartContainer) {
        cartContainer.innerHTML = "";

        let total: number = 0;

        cart.forEach((item: CartItem, index: number) => {
            const tr: HTMLTableRowElement = document.createElement('tr');

            tr.innerHTML = `
                <td><img src="${item.image}" alt="${item.name}" width="50"></td>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.category}</td>
                <td>${item.description}</td>
                <td>$${item.price}</td>
                <td>${item.quantity}</td>
                <td>$${item.price * item.quantity}</td>
                <td>
                    <button onclick="removeFromCart(${index})" class="btn btn-danger btn-sm">Remove</button>
                    <button onclick="addQuantity(${index})" class="btn btn-primary btn-sm">Add</button>
                    <button onclick="removeCartItem(${index})" class="btn btn-primary btn-sm">-</button>
                </td>
            `;

            if (cartContainer) {
                cartContainer.appendChild(tr);
            }

            total += item.price * item.quantity;
        });

        const totalRow: HTMLTableRowElement = document.createElement('tr');
        const totalCell: HTMLTableCellElement = document.createElement('td');
        totalCell.setAttribute('colspan', '8');
        totalCell.style.textAlign = 'right';
        totalCell.textContent = `Total: $${total.toFixed(2)}`;
        totalRow.appendChild(totalCell);
        if (cartContainer) {
            cartContainer.appendChild(totalRow);
        }
    }
}

function removeFromCart(index: number): void {
    let cart: CartItem[] = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

function addQuantity(index: number): void {
    let cart: CartItem[] = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

function proceedToPayment(): void {
    window.location.href = 'payment.html';
}

function removeCartItem(index: number): void {
    let cart: CartItem[] = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity -= 1;
    if (cart[index].quantity === 0) {
        cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}