const ageChecker = document.querySelector('#age');
const signupImage = document.querySelector('.form__image');

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
