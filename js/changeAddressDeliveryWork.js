const changeAddressDeliveryWork = () => {
    const deliveryPopupButton = document.querySelector('#deliveryPopupButton');
    const deliveryMethodPopup = document.querySelector('.delivery-method-popup');
    const addressArr = document.querySelectorAll('.address-value');
    const savedAddressesList = document.querySelector('.saved-addresses');
    const radioList = savedAddressesList.querySelectorAll('.custom-radio');

    deliveryPopupButton.addEventListener('click', () => {
        radioList.forEach(elem => {
            if (elem.checked) {
                addressArr.forEach(address => {
                    address.textContent = elem.parentNode.querySelector('.label-address').textContent;
                })
            }
        })
        deliveryMethodPopup.close();
    })
}

export default changeAddressDeliveryWork;