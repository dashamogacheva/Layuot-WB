import cartTotalCalculation from "./cartTotalCalculation";
import counterMissingProducts from "./counterMissingProducts";
import counterAvailableProducts from "./counterAvailableProducts";
import cartQuantityCountWork from "./cartQuantityCountWork";

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