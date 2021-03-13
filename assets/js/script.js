const ageChecker = document.querySelector('#age');
const signupImage = document.querySelector('.form__image');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

const error = document.querySelector('.error');


function checkAge() {
    if (ageChecker.checked) {
        signupImage.classList.remove('form__image-adult');
        signupImage.classList.add('form__image-kids');
    } else {
        signupImage.classList.remove('form__image-kids');
        signupImage.classList.add('form__image-adult');
    }
}

try {
    ageChecker.addEventListener('change', checkAge);

} catch (error) {
    console.log("checkage function for signup page")
}

const validateName = () => {
    const regex = /^[a-zA-Z ]{3,15}$/;
    if (firstName.value === null || firstName.value === '' || regex.test(firstName.value) === false) {
        error.innerText = 'First Name 3-15 letters / no numbers';
        return false;
    } else {
        error.innerText = '';
        return true;
    }
}

const validateLastName = () => {
    const regex = /^[a-zA-Z ]{3,15}$/;
    if (lastName.value === null || lastName.value === '' || regex.test(lastName.value) === false) {
        error.innerText = 'Last Name 3-15 letters / no numbers';
        return false;
    } else {
        error.innerText = '';
        return true;
    }
}

const validateEMail = () => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (email.value === null || email.value === '' || regex.test(email.value) === false) {
        error.innerText = 'Enter a valid E-Mail Format';
        return false;
    } else {
        error.innerText = '';
        return true;
    }
}

const onFocusOut = () => {
    error.innerText = '';
}

const validatePassword = () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (password.value === null || password.value === '' || regex.test(password.value) === false) {
        error.innerText = 'Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters';
        return false;
    } else {
        error.innerText = '';
        return true;
    }
}

const validateConfirmPassword = () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (confirmPassword.value === null || confirmPassword.value === '' || regex.test(confirmPassword.value) === false || confirmPassword.value !== password.value) {
        error.innerText = 'Passwords must match';
        return false;
    } else {
        error.innerText = '';
        return true;
    }
}