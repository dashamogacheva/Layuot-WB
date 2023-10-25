const popupWork = () => {
    const paymentMethodPopup = document.querySelector('.payment-method-popup');
    const deliveryMethodPopup = document.querySelector('.delivery-method-popup');

    document.querySelectorAll('.change-payment-method-popup-show').forEach(elem => elem.addEventListener('click', () => {
        paymentMethodPopup.show();
    }));

    document.querySelector('.change-payment-method-popup-close').addEventListener('click', () => {
        paymentMethodPopup.close();
    });

    document.querySelectorAll('.change-delivery-method-popup-show').forEach(elem => elem.addEventListener('click', () => {
        deliveryMethodPopup.show();
    }));

    document.querySelector('.change-delivery-method-popup-close').addEventListener('click', () => {
        deliveryMethodPopup.close();
    });
}

export default popupWork;