const counterAvailableProducts = () => {
    const productList = document.querySelector('#productList');
    const availableProducts = document.querySelector('#allAvailableProducts');
    const availableProductsArray = availableProducts.querySelectorAll('.products-list');
    if (availableProductsArray.length === 0) {
        productList.style.display = "none";
    }
}

export default counterAvailableProducts;