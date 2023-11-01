function cartTotalCalculation() {
    const availableProductsSection = document.getElementById('allAvailableProducts');
    const allProducts = availableProductsSection.querySelectorAll('.products-list');
    const sumPrice = document.querySelector('#totalPrice');
    const sumOldPrice = document.querySelector('#totalOldPrice');
    const sumQuantityProduct = document.querySelector('#totalQuantityProduct');
    const discount = document.querySelector('#discount');

    let totalPrice = 0;
    let totalOldPrice = 0;
    let totalCountProduct = 0;
    let totalDiscount = 0;

    allProducts.forEach(elem => {
        let checkbox = elem.querySelector('#productCheckbox');
        if (checkbox.checked) {
            let price = elem.querySelector('.price-style').textContent;
            let oldPrice = elem.querySelector('.old-price').textContent;
            let countProduct = elem.querySelector('#productCount').textContent;
            const currentPrice = parseInt(price);
            const currentOldPrice = parseInt(oldPrice);
            const currentCountProduct = parseInt(countProduct);
            totalPrice += currentPrice;
            totalOldPrice += currentOldPrice;
            totalCountProduct += currentCountProduct;
            totalDiscount = totalOldPrice - totalPrice;
        }
    })

    sumPrice.textContent = totalPrice.toLocaleString() + " сом";
    sumOldPrice.textContent = totalOldPrice.toLocaleString() + " сом";
    sumQuantityProduct.textContent = totalCountProduct + ' товара';
    discount.textContent = '− ' + totalDiscount.toLocaleString() + ' сом'
}
export default cartTotalCalculation;