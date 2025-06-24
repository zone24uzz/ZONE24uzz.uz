let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");

  cartCount.textContent = cart.length;
  totalPrice.textContent = total;

  cartItems.innerHTML = ''; // Clear current items in the cart
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} UZS`;
    cartItems.appendChild(li);
  });
}

function toggleCart() {
  const cartModal = document.getElementById("cart-modal");
  cartModal.style.display = cartModal.style.display === 'flex' ? 'none' : 'flex';
}

function closeCart() {
  const cartModal = document.getElementById("cart-modal");
  cartModal.style.display = 'none';
}

function clearCart() {
  cart = [];
  total = 0;
  updateCart();
  closeCart();
}
