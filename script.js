const inputs = document.querySelectorAll('.input');

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
    if (target.value == ''){
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));

function menuShow() {
    let menuMobile = document.querySelector('.menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else{
        menuMobile.classList.add('open');
    }
}

const navbar = document.querySelector(".navbar");
        const menuButton = document.querySelector(".menu");

    menuButton.addEventListener("click", () => {
        navbar.classList.toggle("show-menu");
    });