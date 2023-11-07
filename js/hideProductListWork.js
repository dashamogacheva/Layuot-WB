import counterAvailableProducts from "./counterAvailableProducts.js";

const hideProductListWork = () => {
    let productList = document.getElementById('productList');
    let hideButton = productList.querySelector('.hide-icon');
    const hideCart = document.querySelector('.hide-cart');
    const activeCart = document.querySelector('.active-cart');
    const totalQuantityProduct = document.querySelector('#totalQuantityProduct');
    const totalPrice = document.querySelector('#totalPrice');
    let productMissingList = document.getElementById('missingList');
    let hideButtonElem = productMissingList.querySelector('.hide-icon');

    hideButton.addEventListener('click', () => {
        productList.classList.toggle('open');
        if (productList.classList.contains('open')) {
            hideCart.style.display = 'none';
            activeCart.style.display = 'block';
        }
        if (!productList.classList.contains('open')) {
            hideCart.style.display = 'block';
            activeCart.style.display = 'none';
            hideCart.textContent = totalQuantityProduct.textContent + ' · ' + totalPrice.textContent;
        }
        counterAvailableProducts();

    });

    hideButtonElem.addEventListener('click', () => {
        productMissingList.classList.toggle('open');
    });
}

export default hideProductListWork;