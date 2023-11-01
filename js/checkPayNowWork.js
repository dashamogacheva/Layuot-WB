const checkPayNowWork = () => {
    const totalPrice = document.querySelector('#totalPrice');
    const orderBtn = document.querySelector('#orderBtn');
    const payNowCheckbox = document.querySelector('#payNow');
    const payNowDescription = document.querySelector("#payNowDescription");

    payNowCheckbox.addEventListener('click', () => {
        if (payNowCheckbox.checked) {
            payNowDescription.style.display = 'none';
            orderBtn.textContent = `Оплатить ` + totalPrice.textContent;
        } else {
            payNowDescription.style.display = 'block';
            orderBtn.textContent = `Заказать`;
        }
    })
}

export default checkPayNowWork;