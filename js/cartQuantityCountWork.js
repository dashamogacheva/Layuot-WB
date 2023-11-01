const cartQuantityCountWork = () => {
    const allAvailableProducts = document.querySelector('#allAvailableProducts');
    const productsList = allAvailableProducts.querySelectorAll('.products-list')
    const cartQuantity = document.querySelectorAll('.cart-quantity');
    cartQuantity.forEach(cartIcon => {
        if (!productsList.length) {
            cartIcon.style.display = 'none';
        }
        cartIcon.innerText = productsList.length;
    })
}
export default cartQuantityCountWork;