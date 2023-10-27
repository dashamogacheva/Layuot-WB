const buttonDeliveryPopupWork = () => {
    const buttons = document.querySelectorAll('.delivery-method-buttons-styles');
    const allContent = document.querySelectorAll('.delivery-part');
    buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => {
                b.classList.remove('active');
            });
            btn.classList.add('active');
            allContent.forEach(content => {
                content.classList.remove('active');
            });
            allContent[index].classList.add('active');
        })
    })
}

export default buttonDeliveryPopupWork;