function cartTotalCalculation () {
    const sumPrice = document.querySelector('#totalPrice');
    const availableProductsSection = document.getElementById('allAvailableProducts');
    const allProducts = availableProductsSection.querySelectorAll('.products-list');

    let totalPrice = 0;

    allProducts.forEach(elem => {
        let price = (elem.querySelector('.price-style').textContent);
        const newPrice = price.replaceAll(' ', '');
        console.log(newPrice);
        const currentPrice = parseInt(newPrice);
        console.log(currentPrice)
        totalPrice += currentPrice;
    })

    console.log(totalPrice);
    sumPrice.textContent = totalPrice;
}

export default cartTotalCalculation;