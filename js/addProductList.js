import { productsList } from '../data/products.js';
const addProductList = () => {
    const templateProductList = document.querySelector('#templateProductList');
    const allProducts = document.querySelector('#allAvailableProducts');
    productsList.forEach(elem => {
        let cloneTemplate = templateProductList.content.cloneNode(true);
        cloneTemplate.querySelector('.titleProduct').textContent = elem.name;
        // cloneTemplate.querySelector('missing-img').src = `assets/image/'${elem.imgURL}' + .png`;
        if (elem.color) {
            cloneTemplate.querySelector('.colorProduct').textContent = 'Цвет: ' + elem.color;
        }
        if (elem.size) {
            cloneTemplate.querySelector('.sizeProduct').textContent = 'Размер: ' + elem.size;
        }
        cloneTemplate.querySelector('#stockProduct').textContent = elem.stock;
        cloneTemplate.querySelector('#companyProduct').textContent = elem.company;
        cloneTemplate.querySelector('.products-left-style').textContent = 'Осталось ' + elem.quantity + ' шт.';
        cloneTemplate.querySelector('.price-style').textContent = elem.price;
        cloneTemplate.querySelector('.old-price').textContent = elem.oldPrice;

        allProducts.append(cloneTemplate);
    })
}

export default addProductList;
