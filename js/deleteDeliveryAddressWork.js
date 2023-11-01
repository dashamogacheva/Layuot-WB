const deleteDeliveryAddressWork = () => {
    const allAddressList = document.querySelectorAll('.saved-addresses-styles');
    allAddressList.forEach(address => {
        const deleteBtn = address.querySelector('.deleteIcon');
        deleteBtn.addEventListener('click', () => {
            address.remove();
        })
    })
}
export default deleteDeliveryAddressWork;