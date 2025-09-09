console.log('Script loaded');

const dialog = document.getElementById('success-dialog');
dialog.querySelector("#dismiss-button").addEventListener('click', function () {
    emailInput.value = "";
    subscriptionForm.style.visibility = 'visible';
    hideDialog();
});

const subscriptionForm = document.getElementById('subscription-form');
const submitButton = document.getElementById('submit-button');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

emailInput.addEventListener('input', function () {
    emailInput.classList.remove('input-error');
    emailInput.classList.add('input-default');
    errorMessage.style.visibility = 'hidden';
});

submitButton.addEventListener('click', function (event) {
    event.preventDefault(); 
    const email = emailInput.value;
    if (!validateEmail(email)) {
        emailInput.classList.remove('input-default');
        emailInput.classList.add('input-error');
        errorMessage.style.visibility = 'visible';
        return;
    }

    showDialog(email);
    subscriptionForm.style.visibility = 'hidden';
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showDialog(email) {
    const confirmationMessage = dialog.querySelector("#confirmation-message");
    const message = confirmationMessage.innerHTML.replace("[email]", `${email}`);
    confirmationMessage.innerHTML = message;
    
    dialog.showModal();
}

const hideDialog = () => { dialog.close(); };
