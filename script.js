const cart = [];
const prices = {
    Pizza: 10.00,
    Burger: 5.00,
    Pasta: 7.00
};

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.getAttribute('data-item');
        cart.push(item);
        updateCart();
    });
});

document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Thank you for your order!');
        cart.length = 0; // Clear the cart
        updateCart();
    } else {
        alert('Your cart is empty.');
    }
});

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItems.appendChild(li);
        total += prices[item];
    });
    document.getElementById('total-price').textContent = total.toFixed(2);
}
