import cartTotalCalculation from "./cartTotalCalculation";
const checkProductWork = () => {
    const allAvailableProducts = document.querySelector('#allAvailableProducts');
    const productsArray = allAvailableProducts.querySelectorAll('.products-list');
    const choiceAllCheckbox = document.querySelector('#choiceAllCheckbox');

    choiceAllCheckbox.addEventListener('click', () => {
        if (choiceAllCheckbox.checked) {
            productsArray.forEach(product => {
                let checkbox = product.querySelector('#productCheckbox');
                checkbox.checked = true;
            })
        } else {
            productsArray.forEach(product => {
                let checkbox = product.querySelector('#productCheckbox');
                checkbox.checked = false;
            })
        }
        cartTotalCalculation();
    })

    productsArray.forEach(product => {
        let checkbox = product.querySelector('#productCheckbox');
        checkbox.addEventListener('click', () => {
            cartTotalCalculation();
        })
    })
}
export default checkProductWork;