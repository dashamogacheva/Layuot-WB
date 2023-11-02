import counterAvailableProducts from "./counterAvailableProducts.js";

const hideProductListWork = () => {
    let productList = document.getElementById('productList');
    let hideButton = productList.querySelector('.hide-icon');

    let productMissingList = document.getElementById('missingList');
    let hideButtonElem = productMissingList.querySelector('.hide-icon');

    hideButton.addEventListener('click', () => {
        productList.classList.toggle('open');
        counterAvailableProducts();
    });

    hideButtonElem.addEventListener('click', () => {
        productMissingList.classList.toggle('open');
    });
}

export default hideProductListWork;