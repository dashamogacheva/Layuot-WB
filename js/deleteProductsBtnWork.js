const deleteProductsBtnWork = () => {
    const allProductsList = document.querySelectorAll('.products-list');
    allProductsList.forEach(product => {
        const deleteBtn = product.querySelector('.deleteIcon');
        deleteBtn.addEventListener('click', () => {
            product.remove();
        })
    })
}

export default deleteProductsBtnWork;