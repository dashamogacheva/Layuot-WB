import cartTotalCalculation from "./cartTotalCalculation.js";
import counterMissingProducts from "./counterMissingProducts.js";
import counterAvailableProducts from "./counterAvailableProducts.js";
import cartQuantityCountWork from "./cartQuantityCountWork.js";

const deleteProductsBtnWork = () => {
    const allProductsList = document.querySelectorAll('.products-list');
    allProductsList.forEach(product => {
        const deleteBtn = product.querySelector('.deleteIcon');
        deleteBtn.addEventListener('click', () => {
            product.remove();
            cartTotalCalculation();
            counterMissingProducts();
            counterAvailableProducts();
            cartQuantityCountWork();
        })
    })
}

export default deleteProductsBtnWork;