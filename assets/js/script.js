const ageChecker = document.querySelector('#age');
const signupImage = document.querySelector('.form__image');
const prev = document.querySelector('.header__movies-prev');
const next = document.querySelector('.header__movies-next');
const carousel = document.querySelector('.header__movies');

const carouselClasses = ['header__movies-1', 'header__movies-2', 'header__movies-3', 'header__movies-4'];

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

