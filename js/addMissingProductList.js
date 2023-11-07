import { productsList } from '../data/products.js';
const addMissingProductList = () => {
    const templateMissingProductList = document.querySelector('#templateMissingProductList');
    const allMissingProducts = document.querySelector('#allMissingProducts');
    productsList.forEach(elem => {
        let cloneTemplate = templateMissingProductList.content.cloneNode(true);
        cloneTemplate.querySelector('.titleProduct').textContent = elem.name;
        // let imgElem = cloneTemplate.getElementById('#missingImg');
        // imgElem.src = `assets/image/${elem.imgURL}.png`;
        if (elem.color) {
            cloneTemplate.querySelector('.colorProduct').textContent = 'Цвет: ' + elem.color;
        }
        if (elem.size) {
            cloneTemplate.querySelector('.sizeProduct').textContent = 'Размер: ' + elem.size;
        }
        allMissingProducts.append(cloneTemplate);
    })
}

export default addMissingProductList;