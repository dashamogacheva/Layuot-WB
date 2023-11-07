import { productsList } from '../data/products.js';
const addProductList = () => {
    const templateProductList = document.querySelector('#templateProductList');
    const allProducts = document.querySelector('#allAvailableProducts');
    productsList.forEach(elem => {
        let cloneTemplate = templateProductList.content.cloneNode(true);
        cloneTemplate.querySelector('.titleProduct').textContent = elem.name;
        cloneTemplate.querySelector('.product-img-style').src = `assets/image/${elem.imgURL}.png` ;
        if (elem.color) {
            cloneTemplate.querySelector('.colorProduct').textContent = 'Цвет: ' + elem.color;
        }
        if (elem.size) {
            cloneTemplate.querySelector('.sizeProduct').textContent = 'Размер: ' + elem.size;
        }
        cloneTemplate.querySelector('#stockProduct').textContent = elem.stock;
        cloneTemplate.querySelector('#companyProduct').textContent = elem.company;
        if (elem.quantity < 5) {
            cloneTemplate.querySelector('.products-left-style').textContent = 'Осталось ' + elem.quantity + ' шт.';
        }
        cloneTemplate.querySelector('.price-style').textContent = Math.round(elem.price)
        cloneTemplate.querySelector('.old-price').textContent = Math.round(elem.oldPrice) + " сом";
        allProducts.append(cloneTemplate);
    })
}

export default addProductList;