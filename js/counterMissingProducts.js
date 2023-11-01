const counterMissingProducts = () => {
    const missingList = document.querySelector('#missingList');
    const missingProducts = document.querySelector('#allMissingProducts');
    const missingProductsArray = missingProducts.querySelectorAll('.products-list');
    const countMissingProducts = document.querySelector('#countMissingProducts');
    if (missingProductsArray.length === 0) {
        missingList.style.display = "none";
    }
    countMissingProducts.textContent = `Отсутствуют · ` + missingProductsArray.length + ` товара`;
}
export default counterMissingProducts;