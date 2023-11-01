import {productsList} from "../data/products";
import cartTotalCalculation from "./cartTotalCalculation";

const counterProductsWork = () => {
    const availableProductsSection = document.getElementById('allAvailableProducts');
    const allProducts = availableProductsSection.querySelectorAll('.products-list');

    allProducts.forEach(elem => {
        const titleProduct = elem.querySelector('.titleProduct').textContent;
        const deleteCount = elem.querySelector('#deleteCount');
        const addCount = elem.querySelector('#addCount');
        let productCount = elem.querySelector('#productCount').textContent;
        let totalPrice = elem.querySelector('.price-style');
        let totalOldPrice = elem.querySelector('.old-price');

        productsList.forEach(product => {
            const countQuantity = product.quantity;
            const priceProduct = product.price;
            const oldPriceProduct = product.oldPrice;

            if (product.name === titleProduct) {
                addCount.addEventListener('click', () => {
                    if (productCount < countQuantity) {
                        deleteCount.disabled = false;
                        productCount++;
                        elem.querySelector('#productCount').textContent = productCount;
                        totalPrice.textContent = `${Math.round(priceProduct * productCount)}`;
                        totalOldPrice.textContent = Math.round(oldPriceProduct * productCount)+ " сом";
                        if (productCount === countQuantity) {
                            addCount.disabled = true;
                        }
                        cartTotalCalculation();
                    }
                })

                deleteCount.addEventListener('click', () => {
                    productCount--;
                    elem.querySelector('#productCount').textContent = productCount;
                    addCount.disabled = false;
                    totalPrice.textContent = `${Math.round(priceProduct * productCount)}`;
                    totalOldPrice.textContent = Math.round(oldPriceProduct * productCount) + " сом";
                    if (productCount === 1) {
                        deleteCount.disabled = true;
                    }
                    cartTotalCalculation();
                })
            }
        })
    })
}
export default counterProductsWork;