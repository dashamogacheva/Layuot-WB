const counterAvailableProducts = () => {
    const productList = document.querySelector('#productList');
    const availableProducts = document.querySelector('#allAvailableProducts');
    const availableProductsArray = availableProducts.querySelectorAll('.products-list');
    if (availableProductsArray.length === 0) {
        productList.style.display = "none";
    }

    // const productQuantity = document.querySelector('#totalQuantityProduct').textContent;
    // const cartSumPrice = document.querySelector('#totalPrice').textContent;
    // const activeCart = document.querySelector('.active-cart');
    // const hideCart = document.querySelector('.hide-cart');
    // if (availableProducts.style.display === 'none') {
    //     activeCart.style.display = 'none';
    //     hideCart.style.display = 'block';
    //     hideCart.textContent = productQuantity + ' · ' + cartSumPrice;
    // }
}

export default counterAvailableProducts;