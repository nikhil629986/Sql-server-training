document.addEventListener("DOMContentLoaded", function () {
  displayCartItems();
});
function displayCartItems() {
  var cartContainer = document.getElementById("cart-items");
  var cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartContainer.innerHTML = "";
  var total = 0;
  cart.forEach(function (item, index) {
    var tr = document.createElement("tr");
    tr.innerHTML = '\n            <td><img src="'
      .concat(item.image, '" alt="')
      .concat(item.name, '" width="50"></td>\n            <td>')
      .concat(item.id, "</td>\n            <td>")
      .concat(item.name, "</td>\n            <td>")
      .concat(item.category, "</td>\n            <td>")
      .concat(item.description, "</td>\n            <td>$")
      .concat(item.price, "</td>\n            <td>")
      .concat(item.quantity, "</td>\n            <td>$")
      .concat(
        item.price * item.quantity,
        '</td>\n            <td>\n                <button onclick="removeFromCart('
      )
      .concat(
        index,
        ')" class="btn btn-danger btn-sm">Remove</button>\n                <button onclick="addQuantity('
      )
      .concat(
        index,
        ')" class="btn btn-primary btn-sm">Add</button>\n                <button onclick="removeCartItem('
      )
      .concat(
        index,
        ')" class="btn btn-primary btn-sm">-</button>\n            </td>\n        '
      );
    cartContainer.appendChild(tr);
    total += item.price * item.quantity;
  });
  var totalRow = document.createElement("tr");
  var totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", "8");
  totalCell.style.textAlign = "right";
  totalCell.textContent = "Total: $".concat(total.toFixed(2));
  totalRow.appendChild(totalCell);
  cartContainer.appendChild(totalRow);
}
function removeFromCart(index) {
  var cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCartItems();
}
function addQuantity(index) {
  var cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity += 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCartItems();
}
function proceedToPayment() {
  window.location.href = "payment.html";
}
function removeCartItem(index) {
  var cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity -= 1;
  if (cart[index].quantity === 0) {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCartItems();
}
