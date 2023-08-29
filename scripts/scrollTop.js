document.addEventListener('DOMContentLoaded', function () {
    const OFFSET = 100;
    const SCROL_UP = document.querySelector('.top-button');

    const GET_TOP = () => window.pageYOffset || document.documentElement.scrollTop;

    window.addEventListener('scroll', () => {
        if (GET_TOP() > OFFSET) {
            SCROL_UP.classList.add('top-button__activ');
        } else {
            SCROL_UP.classList.remove('top-button__activ');
        }
    })

    SCROL_UP.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })
})