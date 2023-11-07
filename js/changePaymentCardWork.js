const changePaymentCardWork = () => {
    const paymentPopupButton = document.querySelector('#paymentPopupButton');
    const paymentMethodPopup = document.querySelector('.payment-method-popup');
    const numberPaymentCardArr = document.querySelectorAll('.numberPaymentCard');
    const iconPaymentCardArr = document.querySelectorAll('.iconPaymentCard');
    const paymentCardsList = document.querySelector('.payment-cards-list');
    const radioList = paymentCardsList.querySelectorAll('.custom-radio');

    paymentPopupButton.addEventListener('click', () => {
        radioList.forEach(elem => {
            if (elem.checked) {
                numberPaymentCardArr.forEach(number => {
                    number.textContent = paymentCardsList.querySelector('.number-card').textContent;
                    iconPaymentCardArr.forEach( icon => {
                        icon.src = `assets/icons/` + `${elem.id}` + `-payment-system.svg`;
                    })
                })
            }
        })
        paymentMethodPopup.close();
    })
}
export default changePaymentCardWork;