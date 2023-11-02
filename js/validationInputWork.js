const validationInputWork = () => {
    const orderBtn = document.querySelector('#orderBtn');
    const recipientDetails = document.querySelector('.recipient-details');
    const allInputs = recipientDetails.querySelectorAll('.input-styles');
    let result = true;
    function removeError(input) {
        const parent = input.parentNode;
        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove();
            parent.classList.remove('error');
        }
    }

    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label');
        errorLabel.classList.add('error-label');
        errorLabel.textContent = text;
        parent.classList.add('error')
        parent.prepend(errorLabel);
    }

    orderBtn.addEventListener('click', (e) => {
        e.preventDefault();
        for (const input of allInputs) {
            removeError(input);
            if (input.value.trim() == '') {
                console.log('Error field!');
                createError(input, 'Заполните поле!');
                result = false;
            }
        }
        return result;
    })
}
export default validationInputWork;