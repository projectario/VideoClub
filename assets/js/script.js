const ageChecker = document.querySelector('#age');
const signupImage = document.querySelector('.form-image');

function checkAge() {
    if (ageChecker.checked) {
        signupImage.classList.remove('form-image-adult');
        signupImage.classList.add('form-image-kids');
    } else {
        signupImage.classList.remove('form-image-kids');
        signupImage.classList.add('form-image-adult');
    }
}

try {
    ageChecker.addEventListener('change', checkAge);

} catch (error) {
    console.log("checkage function for signup page")
}
